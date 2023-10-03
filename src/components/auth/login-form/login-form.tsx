import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components'
import { ControlledTextField } from '@/components/controlled'
import { ControlledCheckbox } from '@/components/controlled/controlled-checkbox/controlledCheckbox.tsx'

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(3, 'Password must be at least 3 characters'),
  rememberMe: z.boolean().optional().default(false),
})

type FormValues = z.infer<typeof loginSchema>
export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })

  console.log(errors)

  const onSubmit = handleSubmit(data => {
    console.log(data)
  })

  return (
    <form onSubmit={onSubmit}>
      <ControlledTextField
        {...register('email')}
        label={'email'}
        errorMessage={errors.email?.message}
        control={control}
      />
      <ControlledTextField
        {...register('password')}
        label={'password'}
        errorMessage={errors.password?.message}
        control={control}
      />
      <ControlledCheckbox control={control} name={'rememberMe'} label={'Remember Me'} />
      <Button type="submit">Submit</Button>
    </form>
  )
}
