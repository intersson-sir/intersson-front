import httpClient from '../httpClient'

export const createForm = (data: FormData) =>
  httpClient<any>({
    method: 'POST',
    url: '/form',
    data
  })
