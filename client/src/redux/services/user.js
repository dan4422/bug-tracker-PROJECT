import { mainApi } from './main'

export const userApiSlice = mainApi.injectEndpoints({
  overrideExisting: false,
  endpoints: (builder) => ({
    getAllUser: builder.query({
      query: () => ({
        url: '/users/all',
      }),
      providesTags: ['User'],
    }),
    getCurrentUser: builder.query({
      query: () => ({
        url: '/users/current',
      }),
      providesTags: ['User'],
    }),
    login: builder.mutation({
      query: (userDetails) => ({
        url: '/users/login',
        method: 'POST',
        body: userDetails,
      }),
      invalidatesTags: ['User'],
    }),
    register: builder.mutation({
      query: (userDetails) => ({
        url: '/users/register',
        method: 'POST',
        body: userDetails,
      }),
      invalidatesTags: ['User'],
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/users/logout',
        method: 'GET',
      }),
      invalidatesTags: ['User'],
    }),
    image: builder.mutation({
      query: (profileImage) => ({
        url: '/addProfileImage',
        method: 'PATCH',
        body: profileImage,
      }),
      invalidatesTags: ['User'],
    }),
  }),
})

export const {
  useGetAllUserQuery,
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useGetCurrentUserQuery,
  useImageMutation,
} = userApiSlice
