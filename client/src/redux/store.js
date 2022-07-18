import { configureStore } from '@reduxjs/toolkit'
import { userApiSlice } from './services/user'

export const store = configureStore({
  reducer: {
    [userApiSlice.reducerPath]: userApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([userApiSlice.middleware]),
})
