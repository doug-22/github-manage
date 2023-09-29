'use client'

import { createSlice } from '@reduxjs/toolkit'
import Cookie from 'js-cookie'
import { AuthState } from '../types'

export const initialState: AuthState = {
  token: Cookie.get('TOKEN') ?? '',
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
      state.token = action.payload
      Cookie.set('TOKEN', state.token, {
        secure: true,
        expires: 1,
      })
    },
  },
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer
