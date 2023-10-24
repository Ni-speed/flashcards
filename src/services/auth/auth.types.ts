export type ResponseUserType = {
  avatar: string
  id: string
  email: string
  isEmailVerified: boolean
  name: string
  created: string
  updated: string
}
export type LoginType = { password: string; email: string; rememberMe: boolean }
export type SignUpArgsType = {
  html: string
  name: string
  password: string
  email: string
  subject: string
  sendConfirmationEmail: boolean
}
export type VerificationType = {
  html: string
  userId: ResponseUserType['id']
  subject: string
}
export type RecoveryPasswordType = Pick<SignUpArgsType, 'html' | 'email' | 'subject'>
