import axios from 'axios'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

export default api

export const apiGetAccesToken = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL_ACCESS_TOKEN,
})
