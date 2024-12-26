import api from './axios'
import { Repository } from '@/types/api'

export const repositoryService = {
  async getAll(): Promise<Repository[]> {
    const { data } = await api.get<Repository[]>('/repositories')
    return data
  },

  async getById(id: string): Promise<Repository> {
    const { data } = await api.get<Repository>(`/repositories/${id}`)
    return data
  },

  async create(url: string): Promise<Repository> {
    const { data } = await api.post<Repository>('/repositories', { url })
    return data
  },

  async delete(id: string): Promise<void> {
    await api.delete(`/repositories/${id}`)
  },
}
