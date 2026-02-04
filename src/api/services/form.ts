import API from '@/configs/api'

import httpClient from '../httpClient'

export const createForm = (data: FormData) =>
  httpClient<any>({
    method: 'POST',
    url: API.CONTACT.DISCUSS_PROJECT,
    data
  })
