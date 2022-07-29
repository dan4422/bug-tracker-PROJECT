import { mainApi } from './main'

export const issuesApiSlice = mainApi.injectEndpoints({
  overrideExisting: false,
  endpoints: (builder) => ({
    getIssues: builder.query({
      query: () => '/projects/issues',
      providesTags: ['Issue'],
    }),
    getAllIssues: builder.query({
      query: () => '/projects/getAllIssues',
      providesTags: ['Issue'],
    }),
    getProjectIssues: builder.query({
      query: (projectId) => `/projects/${projectId}/issues`,
      providesTags: ['Issue'],
    }),
    getIssueByID: builder.query({
      query: ({ projectId, issueId }) => `/projects/${projectId}/issues/${issueId}`,
      providesTags: ['Issue'],
    }),
    addNewIssue: builder.mutation({
      query: ({ projectId, newIssue }) => ({
        url: `/projects/${projectId}/issues/create`,
        method: 'POST',
        body: newIssue,
      }),
      invalidatesTags: ['Issue', 'Project'],
    }),
    deleteIssue: builder.mutation({
      query: ({ projectId, issueId }) => ({
        url: `/projects/${projectId}/issues/${issueId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Issue', 'Project'],
    }),
    updateIssue: builder.mutation({
      query: ({ projectId, issueId, updatedIssue }) => ({
        url: `/projects/${projectId}/issues/${issueId}`,
        method: 'PATCH',
        body: updatedIssue,
      }),
      invalidatesTags: ['Issue', 'Project'],
    }),
  }),
})

export const {
  useGetIssuesQuery,
  useGetAllIssuesQuery,
  useGetIssueByIDQuery,
  useGetProjectIssuesQuery,
  useAddNewIssueMutation,
  useDeleteIssueMutation,
  useUpdateIssueMutation,
} = issuesApiSlice
