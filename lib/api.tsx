// lib/api.tsx
import Cookies from 'js-cookie';
import axios from 'axios'
import { siteConfig } from '@/config/site';

interface Payload {
  data: any;
  error: { code: number; message: string } | null;
}

interface ResponseData {
  status: string;
  payload: Payload;
  meta: { message: string | null };
}

const api = axios.create({
  baseURL: siteConfig.api.url,
})

api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = Cookies.get('refresh_token');

      return api.post(siteConfig.api.refresh_endpoint, { token: refreshToken })
        .then(response => {
          const newAccessToken = response.data.access_token;

          Cookies.set('access_token', newAccessToken);
          originalRequest.headers['Authorization'] = 'Bearer ' + newAccessToken;

          return api(originalRequest);
        });
    }

    return Promise.reject(error);
  }
);

api.interceptors.request.use((request) => {
  const token = Cookies.get('access_token');
  request.headers['Authorization'] = 'Bearer ' + token;

  return request;
});


export const parseResponse = (response: ResponseData) => {
  let status = response.status;
  let data = null;
  let error = null;
  let message = null;

  if (status === "success") {
    data = response.payload.data;
    message = response.meta.message;
  } else if (status === "error") {
    error = response.payload.error;
    message = response.meta.message;
  }

  return { status, data, error, message };
}


export const fetcher = (url: string) => api.get(url)
  .then(res => parseResponse(res.data));
