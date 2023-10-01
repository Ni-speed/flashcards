import { zodResolver } from '@hookform/resolvers/zod'
import { useController, useForm } from 'react-hook-form'
import { z } from 'zod'

import { TextField, Button, CheckBox } from '@/components'

type FormValues = {
  email: string
  password: string
  rememberMe: boolean
}
const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
})

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
  const {
    field: { value, onChange },
  } = useController({
    name: 'rememberMe',
    control,
    defaultValue: false,
  })

  return (
    <form onSubmit={onSubmit}>
      <TextField {...register('email')} label={'email'} errorMessage={errors.email?.message} />
      <TextField {...register('password')} label={'password'} />
      <CheckBox checked={value} onValueChange={onChange} label={'Remember Me'} />
      <Button type="submit">Submit</Button>
    </form>
  )
}
