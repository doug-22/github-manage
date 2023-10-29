import api from '@/app/services/api'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../configureStore'

export const getRepo = createAsyncThunk(
  'dashboard/getRepo',
  async (data: { repoName: string }, { rejectWithValue, getState }) => {
    try {
      const state = getState() as RootState
      const { username } = state.user
      const { token } = state.auth
      const response = await api.get(`/repos/${username}/${data.repoName}`, {
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
