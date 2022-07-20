import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const issuesApiSlice = createApi({
  reducerPath: 'issues',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v1/projects' }),
  tagTypes: ['Issue'],
  endpoints: (builder) => ({
    getIssues: builder.query({
      query: () => '/issues',
      providesTags: ['Issue'],
    }),
    getProjectIssues: builder.query({
      query: (projectId) => `/${projectId}/issues`,
      providesTags: ['Issue'],
    }),
    addNewIssue: builder.mutation({
      query: (projectId, newIssue) => ({
        url: `/${projectId}/issues/create`,
        method: 'POST',
        body: newIssue,
      }),
      invalidatesTags: ['Issue'],
    }),
    deleteIssue: builder.mutation({
      query: (projectId, issueId) => ({
        url: `/${projectId}/issues/${issueId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Issue'],
    }),
    updateIssue: builder.mutation({
      query: ({ projectId, issueId, updatedIssue }) => ({
        url: `/${projectId}/issues/${issueId}`,
        method: 'PATCH',
        body: updatedIssue,
      }),
      invalidatesTags: ['Issue'],
    }),
  }),
})

export const {
  useGetIssuesQuery,
  useGetProjectIssuesQuery,
  useAddNewIssueMutation,
  useDeleteIssueMutation,
  useUpdateIssueMutation,
} = issuesApiSlice
