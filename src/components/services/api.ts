import axios from 'axios'

const accessToken = import.meta.env.VITE_JUSBRASIL_API_KEY

const api = axios.create({
  baseURL: 'https://op.digesto.com.br/api/',
  headers: {
    Authorization: `Bearer ${accessToken}`,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export { api }
