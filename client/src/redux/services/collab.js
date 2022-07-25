import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const collabApiSlice = createApi({
  reducerPath: 'collab',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v1/collab' }),
  tagTypes: ['Collab', 'User', 'Project'],
  endpoints: (builder) => ({
    getProjectsByUser: builder.query({
      query: () => '/getProjectsByUser',
      providesTags: ['Collab', 'Project'],
    }),
    getAllCollabProjects: builder.query({
      query: () => '/getAllCollabProjects',
      providesTags: ['Collab', 'Project'],
    }),
    assignUserToProject: builder.mutation({
      query: (assign) => ({
        url: '/assign',
        method: 'POST',
        body: assign,
      }),
      invalidatesTags: ['Collab', 'Project', 'User'],
    }),
    unassignUserToProject: builder.mutation({
      query: (unassign) => ({
        url: '/unassign',
        method: 'DELETE',
        body: unassign,
      }),
      invalidatesTags: ['Collab', 'Project', 'User'],
    }),
  }),
})

export const {
  useGetProjectsByUserQuery,
  useGetAllCollabProjectsQuery,
  useAssignUserToProjectMutation,
  useUnassignUserToProjectMutation,
} = collabApiSlice
