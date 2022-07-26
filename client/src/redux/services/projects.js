import { mainApi } from './main'

export const projectsApiSlice = mainApi.injectEndpoints({
  overrideExisting: false,
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => '/projects',
      providesTags: ['Project'],
    }),
    getProjectsByID: builder.query({
      query: (projectId) => `/projects/${projectId}`,
      providesTags: ['Project'],
    }),
    addNewProject: builder.mutation({
      query: (newProject) => ({
        url: '/projects/create',
        method: 'POST',
        body: newProject,
      }),
      invalidatesTags: ['Project', 'Collab'],
    }),
    deleteProject: builder.mutation({
      query: (id) => ({
        url: `/projects/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Project'],
    }),
    updateProject: builder.mutation({
      query: ({ id, updatedProject }) => ({
        url: `/projects/${id}`,
        method: 'PATCH',
        body: updatedProject,
      }),
      invalidatesTags: ['Project'],
    }),
  }),
})

export const {
  useGetProjectsQuery,
  useGetProjectsByIDQuery,
  useAddNewProjectMutation,
  useDeleteProjectMutation,
  useUpdateProjectMutation,
} = projectsApiSlice
