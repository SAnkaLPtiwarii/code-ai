
import { z } from 'zod'

export const repositorySchema = z.object({
  url: z.string().url('Please enter a valid repository URL'),
  branch: z.string().optional()
})

export const userSettingsSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  notifications: z.boolean(),
  theme: z.enum(['light', 'dark', 'system']),
  language: z.string()
})

export type RepositoryFormData = z.infer<typeof repositorySchema>
export type UserSettingsFormData = z.infer<typeof userSettingsSchema>