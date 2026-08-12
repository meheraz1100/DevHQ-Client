import { z } from 'zod';

export const createTeamSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, 'Team name is required')
    .max(50),

  slug: z
    .string()
    .trim()
    .min(3)
    .max(30)
    .regex(
      /^[a-z0-9-]+$/,
      'Only lowercase letters, numbers and hyphens are allowed',
    ),

  description: z
    .string()
    .trim()
    .max(200)
    .optional(),
});

export type CreateTeamSchema = z.infer<
  typeof createTeamSchema
>;