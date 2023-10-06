import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import s from './signIn.module.scss'

import { Button, Card, Typography } from '@/components'
import { ControlledTextField } from '@/components/controlled'
import { ControlledCheckbox } from '@/components/controlled/controlled-checkbox/controlledCheckbox.tsx'

const signInSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(3, 'Password must be at least 3 characters'),
  rememberMe: z.boolean().optional().default(false),
})

type FormValues = z.infer<typeof signInSchema>
export const SignIn = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(signInSchema),
  })

  console.log(errors)

  const onSubmit = handleSubmit(data => {
    console.log(data)
  })

  return (
    <Card className={s.card}>
      <Typography variant={'large'} className={s.title}>
        Sign In
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
        </div>
        <ControlledCheckbox control={control} name={'rememberMe'} label={'Remember Me'} />
        <Typography
          variant={'body2'}
          className={s.forgotPassLink}
          as={'a'}
          href={'https://www.youtube.com/watch?v=1FM8UBRV22s'}
        >
          Forgot Password?
        </Typography>
        {/* todo need to add react-router-don and change href  on to={}*/}
        <Button type="submit" fullWidth>
          <Typography variant={'subtitle2'}>Sign In</Typography>
        </Button>
      </form>
      <Typography variant={'body2'} as={'div'} className={s.caption}>
        Don&#39;t have an account?
      </Typography>
      <Typography
        variant={'body2'}
        as={'a'}
        href={'https://www.youtube.com/watch?v=1FM8UBRV22s'}
        className={s.signUpLink}
      >
        Sign Up
      </Typography>
      {/* todo need to add react-router-don and change href  on to={}*/}
    </Card>
  )
}
