import { configureStore } from '@reduxjs/toolkit'
import { projectsApiSlice } from './services/projects'
import { userApiSlice } from './services/user'

export const store = configureStore({
  reducer: {
    [userApiSlice.reducerPath]: userApiSlice.reducer,
    [projectsApiSlice.reducerPath]: projectsApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([userApiSlice.middleware, projectsApiSlice.middleware]),
})
