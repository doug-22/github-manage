'use client'

import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit'
import Cookie from 'js-cookie'
import { AuthState } from '../types'
import * as authActions from './actions/authActions'

export const initialState: AuthState = {
  token: Cookie.get('TOKEN') ?? '',
  loadingGetAccessToken: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.token = ''
      Cookie.remove('TOKEN')
    },
    login: (state, action) => {
      state.token = action.payload?.name
      Cookie.set('TOKEN', state.token, {
        secure: true,
        expires: 1,
      })
    },
  },
  extraReducers(builder) {
    builder.addMatcher(isPending(authActions.getAccessToken), (state) => {
      state.loadingGetAccessToken = true
    })
    builder.addMatcher(
      isFulfilled(authActions.getAccessToken),
      (state, action) => {
        state.token = action.payload?.access_token
        Cookie.set('TOKEN', state.token, {
          secure: true,
          expires: 1,
        })
        state.loadingGetAccessToken = false
      },
    )
    builder.addMatcher(isRejected(authActions.getAccessToken), (state) => {
      state.loadingGetAccessToken = false
    })
  },
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer
