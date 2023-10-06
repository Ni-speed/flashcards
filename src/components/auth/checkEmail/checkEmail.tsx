import { FC } from 'react'

import s from './checkEmail.module.scss'

import CheskEmail from '@/assets/icons/chesk-email.tsx'
import { Button, Card, Typography } from '@/components'

type CheckEmailProps = { email: string }

export const CheckEmail: FC<CheckEmailProps> = ({ email }) => {
  return (
    <Card className={s.card}>
      <Typography variant="large" as="h1" className={s.title}>
        Check Email
      </Typography>
      <CheskEmail className={s.emailImage} />
      <Typography
        variant="body2"
        className={s.description}
      >{`We’ve sent an Email with instructions to ${email}`}</Typography>
      <Button as={'a'} href={'/sign-in'} fullWidth>
        <Typography variant="body2">Back to Sign in</Typography>
      </Button>
    </Card>
  )
}
