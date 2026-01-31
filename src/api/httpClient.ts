import axios, { AxiosRequestConfig } from 'axios'

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL

const httpClient = <T>({
  method = 'GET',
  url,
  data,
  params,
  headers
}: AxiosRequestConfig) =>
  axios<T>({
    method,
    url,
    data,
    params,
    headers: {
      ...headers
    }
  })

export default httpClient
