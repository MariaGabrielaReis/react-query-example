import { useEffect, useState } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com/',
});

export function useAPI<T = unknown>(url: string, options?: AxiosRequestConfig) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get(url, options)
      .then(response => setData(response.data))
      .catch(err => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

  return { data, error, isLoading };
}
