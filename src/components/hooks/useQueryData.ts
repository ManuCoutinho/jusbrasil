import { useQuery } from 'react-query'
import { api } from '../services/api'

async function getInfo(process: string) {
  const { data } = await api.get(`tribproc/${process}`, {
    params: {
      tipo_numero: '8',
    },
  })
  return data
}
export function useQueryData(process: string) {
  return useQuery('proc', () => getInfo(process), {
    staleTime: 60 * 10, // 10 minutes
  })
}
