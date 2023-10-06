import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import s from './signUp.module.scss'

import { Button, Card, Typography } from '@/components'
import { signUpSchema } from '@/components/auth/signUp/signUp.schema.ts'
import { ControlledTextField } from '@/components/controlled'

type FormValues = z.infer<typeof signUpSchema>
export const SignUp = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  console.log(errors)

  const onSubmit = handleSubmit(data => {
    console.log(data)
  })

  return (
    <Card className={s.card}>
      <Typography variant={'large'} className={s.title}>
        Sign Up
      </Typography>
      <form onSubmit={onSubmit}>
        <div className={s.fields}>
          <ControlledTextField
            {...register('email')}
            label={'Email'}
            errorMessage={errors.email?.message}
            control={control}
          />
          <ControlledTextField
            {...register('password')}
            label={'password'}
            errorMessage={errors.password?.message}
            control={control}
          />
          <ControlledTextField
            {...register('confirmPassword')}
            label={'Confirm Password'}
            errorMessage={errors.confirmPassword?.message}
            control={control}
          />
        </div>
        <Button type="submit" fullWidth className={s.signUp}>
          <Typography variant={'subtitle2'}>Sign In</Typography>
        </Button>
      </form>
      <Typography variant={'body2'} as={'div'} className={s.caption}>
        Already have an account??
      </Typography>
      <Typography
        variant={'body2'}
        as={'a'}
        href={'https://www.youtube.com/watch?v=1FM8UBRV22s'}
        className={s.signUpLink}
      >
        Sign In
      </Typography>
      {/* todo need to add react-router-don and change href  on to={}*/}
    </Card>
  )
}
