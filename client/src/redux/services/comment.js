import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const commentsApiSlice = createApi({
  reducerPath: 'comments',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v1/comments' }),
  tagTypes: ['Comment'],
  endpoints: (builder) => ({
    getComments: builder.query({
      query: () => '/comments',
      providesTags: ['Comment'],
    }),
    addNewComment: builder.mutation({
      query: (newComment) => ({
        url: '/comments',
        method: 'POST',
        body: newComment,
      }),
      invalidatesTags: ['Comment'],
    }),
    deleteComment: builder.mutation({
      query: (id) => ({
        url: `/comments/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Comment'],
    }),
    updateComment: builder.mutation({
      query: ({ id, updatedComment }) => ({
        url: `/comments/${id}`,
        method: 'PATCH',
        body: updatedComment,
      }),
      invalidatesTags: ['Comment'],
    }),
  }),
})

export const { useGetCommentsQuery, useAddNewCommentMutation, useDeleteCommentMutation, useUpdateCommentMutation } =
  commentsApiSlice
