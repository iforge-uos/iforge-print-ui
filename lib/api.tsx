// lib/api.tsx

import axios from "axios"
import Cookies from "js-cookie"

import { siteConfig } from "@/config/site"

interface Payload {
  data: any
  error: { code: number; message: string } | null
}

interface ResponseData {
  status: string
  payload: Payload
  meta: { message: string | null }
}

export interface ParsedResponse {
  status: string
  data: any
  error: { code: number; message: string } | null
  message: string | null
}

const api = axios.create({
  baseURL: siteConfig.api.url,
})

function createAxiosResponseInterceptor() {
  return api.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response.status !== 401) {
        return Promise.reject(error)
      }

      const refreshToken = Cookies.get("refresh_token")
      const refreshApi = axios.create({
        baseURL: siteConfig.api.url,
      })

      try {
        const response = await refreshApi
          .post(
            siteConfig.api.refresh_endpoint,
            {},
            {headers: {Authorization: "Bearer " + refreshToken}}
          )
        const newAccessToken = response.data.payload.data.access_token
        Cookies.set("access_token", newAccessToken, {sameSite: "strict"})
        error.response.config.headers["Authorization"] =
          "Bearer " + newAccessToken
        return await api.request(error.response.config)
      } catch (error2) {
        return await Promise.reject(error2)
      }
    }
  )
}

createAxiosResponseInterceptor()

api.interceptors.request.use((request) => {
  const token = Cookies.get("access_token")
  request.headers["Authorization"] = "Bearer " + token
  return request
})

export const parseResponse = (response: ResponseData): ParsedResponse => {
  let status = response.status
  let data = null
  let error = null
  let message = null

  if (status === "success") {
    data = response.payload.data
    message = response.meta.message
  } else if (status === "error") {
    error = response.payload.error
    message = response.meta.message
  }

  return { status, data, error, message }
}

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      return Promise.reject(error.response.data)
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser
      // and an instance of http.ClientRequest in Node.js
      return Promise.reject(error.request)
    } else {
      // Something happened in setting up the request that triggered an Error
      return Promise.reject(error.message)
    }
  }
)

export const getData = (url: string) =>
  api.get(url).then((res) => parseResponse(res.data))


export const postData = (url: string, data: any) =>
  api.post(url, data).then((res) => parseResponse(res.data))

export const putData = (url: string, data: any) =>
  api.put(url, data).then((res) => parseResponse(res.data))

export const deleteData = (url: string) =>
  api.delete(url).then((res) => parseResponse(res.data))


