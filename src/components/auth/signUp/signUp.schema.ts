import { z } from 'zod'

export const signUpSchema = z
  .object({
    email: z.string().email('Please enter a valid email'),
    password: z.string().min(3, 'Password must be at least 3 characters'),
    confirmPassword: z.string().min(3, 'Password must contain at least 3 character(s)'),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })
