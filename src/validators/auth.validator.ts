import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address.'),

  password: z
    .string()
    .min(1, 'Password is required.'),
});

export const registerSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(2, 'Name must be at least 2 characters.')
      .max(50, 'Name is too long.'),

    username: z
      .string()
      .trim()
      .min(3, 'Username must be at least 3 characters.')
      .max(30, 'Username must be less than 30 characters.')
      .regex(
        /^[a-zA-Z0-9._]+$/,
        'Username can only contain letters, numbers, "." and "_". No spaces are allowed.',
      ),

    email: z.string().email('Please enter a valid email address.'),

    password: z
      .string()
      .min(8, 'Password must be at least 8 characters.')
      .regex(
        /[A-Z]/,
        'Password must contain at least one uppercase letter.',
      )
      .regex(
        /[a-z]/,
        'Password must contain at least one lowercase letter.',
      )
      .regex(
        /[0-9]/,
        'Password must contain at least one number.',
      )
      .regex(
        /[^A-Za-z0-9]/,
        'Password must contain at least one special character.',
      ),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match.',
  });

export type LoginSchema = z.infer<typeof loginSchema>;
export type RegisterSchema = z.infer<typeof registerSchema>;