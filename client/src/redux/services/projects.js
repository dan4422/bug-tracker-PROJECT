import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const projectsApiSlice = createApi({
  reducerPath: 'projects',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v1/projects' }),
  tagTypes: ['Project', 'Collab'],
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => '/',
      providesTags: ['Project'],
    }),
    getProjectsByID: builder.query({
      query: (projectId) => `/${projectId}`,
      providesTags: ['Project'],
    }),
    addNewProject: builder.mutation({
      query: (newProject) => ({
        url: '/create',
        method: 'POST',
        body: newProject,
      }),
      invalidatesTags: ['Project'],
    }),
    deleteProject: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Project'],
    }),
    updateProject: builder.mutation({
      query: ({ id, updatedProject }) => ({
        url: `/${id}`,
        method: 'PATCH',
        body: updatedProject,
      }),
      invalidatesTags: ['Project', 'Collab'],
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
