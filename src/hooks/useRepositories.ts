import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { repositoryService } from '@/services/api/repositories'
import type { Repository } from '@/types/api'

export function useRepositories() {
  const queryClient = useQueryClient()

  const query = useQuery({
    queryKey: ['repositories'],
    queryFn: repositoryService.getAll
  })

  const addMutation = useMutation({
    mutationFn: repositoryService.create,
    onSuccess: (newRepo: Repository) => {
      queryClient.setQueryData<Repository[]>(['repositories'], (old = []) => [
        ...old,
        newRepo
      ])
    }
  })

  const deleteMutation = useMutation({
    mutationFn: repositoryService.delete,
    onSuccess: (_, deletedId) => {
      queryClient.setQueryData<Repository[]>(['repositories'], (old = []) =>
        old.filter(repo => repo.id !== deletedId)
      )
    }
  })

  return {
    repositories: query.data ?? [],
    isLoading: query.isLoading,
    error: query.error,
    addRepository: addMutation.mutate,
    deleteRepository: deleteMutation.mutate,
    isAddingRepository: addMutation.isPending,
    isDeletingRepository: deleteMutation.isPending
  }
}
