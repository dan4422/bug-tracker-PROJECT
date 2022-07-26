import { mainApi } from './main'

export const collabApiSlice = mainApi.injectEndpoints({
  overrideExisting: false,
  endpoints: (builder) => ({
    getProjectsByUser: builder.query({
      query: () => '/collab/getProjectsByUser',
      providesTags: ['Collab', 'Project'],
    }),
    getAllCollabProjects: builder.query({
      query: () => '/collab/getAllCollabProjects',
      providesTags: ['Collab'],
    }),
    assignUserToProject: builder.mutation({
      query: (assign) => ({
        url: '/collab/assign',
        method: 'POST',
        body: assign,
      }),
      invalidatesTags: ['Collab'],
    }),
    unassignUserToProject: builder.mutation({
      query: (unassign) => ({
        url: '/collab/unassign',
        method: 'DELETE',
        body: unassign,
      }),
      invalidatesTags: ['Collab'],
    }),
  }),
})

export const {
  useGetProjectsByUserQuery,
  useGetAllCollabProjectsQuery,
  useAssignUserToProjectMutation,
  useUnassignUserToProjectMutation,
} = collabApiSlice
