import { configureStore } from '@reduxjs/toolkit'
import { commentsApiSlice } from './services/comment'
import { mainApi } from './services/main'

export const store = configureStore({
  reducer: {
    [mainApi.reducerPath]: mainApi.reducer,
    [commentsApiSlice.reducerPath]: commentsApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([mainApi.middleware, commentsApiSlice.middleware]),
})
