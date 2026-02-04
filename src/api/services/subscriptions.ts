import API from '@/configs/api'

import httpClient from '../httpClient'

export const getIndustries = () =>
  httpClient<any>({
    method: 'GET',
    url: API.SUBSCRIPTIONS.INDUSTRIES
  })

export const getTemplates = (industryId: string | number) =>
  httpClient<any>({
    method: 'GET',
    url: API.SUBSCRIPTIONS.TEMPLATES,
    params: {
      industry_id: industryId
    }
  })
