import { configureStore } from '@reduxjs/toolkit'
import { projectsApiSlice } from './services/projects'
import { userApiSlice } from './services/user'
import { issuesApiSlice } from './services/issues'

export const store = configureStore({
  reducer: {
    [userApiSlice.reducerPath]: userApiSlice.reducer,
    [projectsApiSlice.reducerPath]: projectsApiSlice.reducer,
    [issuesApiSlice.reducerPath]: issuesApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([userApiSlice.middleware, projectsApiSlice.middleware, issuesApiSlice.middleware]),
})
