"use client"
import {useEffect, useState} from "react";
import {getData} from "@/lib/api";

export const useFetchOnce = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getData(url);
        if (response && 'data' in response) { // If response has a "data" property
          setData(response.data);
        } else {
          setData(response); // If the response is the data directly
        }
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, error };
};
