import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit'
import Cookie from 'js-cookie'
import { UserState } from '../types'
import * as userActions from './actions/userActions'

export const initialState: UserState = {
  username: Cookie.get('USERNAME') ?? '',
  loadingUsername: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addMatcher(isPending(userActions.getUser), (state) => {
      state.loadingUsername = true
    })
    builder.addMatcher(isFulfilled(userActions.getUser), (state, action) => {
      state.username = action.payload?.login
      Cookie.set('USERNAME', state.username, {
        secure: true,
        expires: 1,
      })
      state.loadingUsername = false
    })
    builder.addMatcher(isRejected(userActions.getUser), (state) => {
      state.loadingUsername = false
    })
  },
})

export default userSlice.reducer
