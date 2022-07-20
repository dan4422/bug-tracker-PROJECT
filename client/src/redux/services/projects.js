import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const projectsApiSlice = createApi({
  reducerPath: 'projects',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v1/projects' }),
  tagTypes: ['Project'],
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => '/',
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

export const { useGetProjectsQuery, useAddNewProjectMutation, useDeleteProjectMutation, useUpdateProjectMutation } =
  projectsApiSlice
