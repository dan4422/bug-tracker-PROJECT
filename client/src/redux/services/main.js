import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export const mainApi = createApi({
  tagTypes: ['Collab', 'Project', 'Issue', 'User'],
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/v1/',
  }),
  endpoints: () => ({}),
})
