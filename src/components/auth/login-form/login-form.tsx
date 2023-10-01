import { useController, useForm } from 'react-hook-form'

import { TextField, Button, CheckBox } from '@/components'

type FormValues = {
  email: string
  password: string
  rememberMe: boolean
}

export const LoginForm = () => {
  const { register, handleSubmit, control } = useForm<FormValues>()

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
      <TextField {...register('email')} label={'email'} />
      <TextField {...register('password')} label={'password'} />
      <CheckBox checked={value} onValueChange={onChange} label={'Remember Me'} />
      <Button type="submit">Submit</Button>
    </form>
  )
}
