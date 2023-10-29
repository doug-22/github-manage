import api from '@/app/services/api'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../configureStore'

export const getUser = createAsyncThunk(
  'user/getUser',
  async (_, { rejectWithValue, getState }) => {
    try {
      const state = getState() as RootState
      const { token } = state.auth
      const response = await api.get('/user', {
        headers: {
          Authorization: `token ${token}`,
        },
      })

      return response.data
    } catch (error: any) {
      return rejectWithValue(error)
    }
  },
)
