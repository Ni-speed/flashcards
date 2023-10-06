import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
// import { useNavigate } from 'react-router-dom'

import s from './createNewPassword.module.scss'

import { Button, Card, ControlledTextField, Typography } from '@/components'
import {
  createNewPasswordSchema,
  FormValues,
} from '@/components/auth/createNewPassword/createNewPassword.schema.ts'

type CreateNewPasswordProps = {
  onSubmit: (data: FormValues) => any
  token?: string
}

export const CreateNewPassword = (props: CreateNewPasswordProps) => {
  // const navigate = useNavigate()

  const { handleSubmit, control, getValues } = useForm<FormValues>({
    mode: 'onSubmit',
    resolver: zodResolver(createNewPasswordSchema),
    defaultValues: {
      password: '',
    },
  })

  const onSubmit = () => {
    props
      .onSubmit({ token: props.token, password: getValues().password })
      .unwrap()
      .then(() => {
        // navigate('/sign-in')
      })
  }

  return (
    <Card className={s.card}>
      <Typography variant={'large'} as={'h1'} className={s.title}>
        Create new password
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ControlledTextField
          name={'password'}
          label={'Password'}
          type={'password'}
          control={control}
        />
        <Typography variant={'body2'} className={s.description}>
          Create new password and we will send you further instructions to email
        </Typography>
        <Button
          fullWidth
          onClick={() => props.onSubmit({ token: props.token, password: getValues().password })}
        >
          <Typography variant={'body2'}>Create New Password</Typography>
        </Button>
      </form>
    </Card>
  )
}
