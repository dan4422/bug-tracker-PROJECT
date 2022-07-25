import { configureStore } from '@reduxjs/toolkit'
import { projectsApiSlice } from './services/projects'
import { userApiSlice } from './services/user'
import { issuesApiSlice } from './services/issues'
import { collabApiSlice } from './services/collab'
import { commentsApiSlice } from './services/comment'

export const store = configureStore({
  reducer: {
    [userApiSlice.reducerPath]: userApiSlice.reducer,
    [projectsApiSlice.reducerPath]: projectsApiSlice.reducer,
    [issuesApiSlice.reducerPath]: issuesApiSlice.reducer,
    [collabApiSlice.reducerPath]: collabApiSlice.reducer,
    [commentsApiSlice.reducerPath]: commentsApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      userApiSlice.middleware,
      projectsApiSlice.middleware,
      issuesApiSlice.middleware,
      collabApiSlice.middleware,
      commentsApiSlice.middleware,
    ]),
})
