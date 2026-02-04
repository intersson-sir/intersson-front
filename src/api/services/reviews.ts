import API from '@/configs/api'

import httpClient from '../httpClient'

export const getReviews = () =>
  httpClient<any>({
    method: 'GET',
    url: API.REVIEWS.GET_REVIEWS
  })

export const createReview = (data: FormData) =>
  httpClient<any>({
    method: 'POST',
    url: API.REVIEWS.SEND_REVIEW,
    data
  })
