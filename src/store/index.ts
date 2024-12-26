import { QueryClient, DefaultOptions } from '@tanstack/react-query'

const defaultQueryOptions: DefaultOptions = {
  queries: {
    refetchOnWindowFocus: false,
    retry: 1,
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 30 // 30 minutes (replacing cacheTime)
  }
}

export const queryClient = new QueryClient({
  defaultOptions: defaultQueryOptions
})