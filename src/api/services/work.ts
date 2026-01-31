import { TagType, WorkType } from '@/types'

import httpClient from '../httpClient'

export const getTags = () =>
  httpClient<TagType[]>({
    method: 'GET',
    url: '/tags'
  })

export const getWorks = (id: number) =>
  httpClient<WorkType[]>({
    method: 'GET',
    url: `/work/id?id=${id}`
  })

export const getAllWorks = () =>
  httpClient<WorkType[]>({
    method: 'GET',
    url: '/work/all'
  })

export const createWorkForm = (data: FormData) =>
  httpClient<any>({
    method: 'POST',
    url: '/work-request',
    data
  })
