import { apiGetAccesToken } from '@/app/services/api'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const getAccessToken = createAsyncThunk(
  'auth/getAccessToken',
  async (data: { code: string }, { rejectWithValue }) => {
    try {
      const response = await apiGetAccesToken.post('/getaccesstoken', {
        code: data.code,
      })

      return response.data
    } catch (error: any) {
      return rejectWithValue(error)
    }
  },
)
