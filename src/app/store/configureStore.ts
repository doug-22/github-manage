import { configureStore, combineReducers } from '@reduxjs/toolkit'
import auth from './auth'
import filters from './filters'
import user from './user'
import dashboard from './dashboard'
import modal from './modal'

const reducer = combineReducers({
  auth,
  filters,
  user,
  dashboard,
  modal,
})

const store = configureStore({
  reducer,
})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
