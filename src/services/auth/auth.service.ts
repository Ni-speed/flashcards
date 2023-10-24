import { baseApi } from '@/services'
import {
  LoginType,
  RecoveryPasswordType,
  ResponseUserType,
  SignUpArgsType,
  VerificationType,
} from '@/services/auth/auth.types.ts'

export const AuthService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      me: builder.query<ResponseUserType | null, void>({
        query: () => ({
          url: `/v1/auth/me`,
          method: 'GET',
          providesTags: ['Me'],
        }),
      }),
      login: builder.mutation<any, LoginType>({
        query: () => ({
          url: `/v1/auth/login`,
          method: 'POST',
          body: {},
        }),
        invalidatesTags: ['Me'],
      }),
      signUp: builder.mutation<ResponseUserType, SignUpArgsType>({
        query: body => ({
          url: `/v1/auth/sign-up`,
          method: 'POST',
          body,
        }),
        invalidatesTags: ['Me'],
      }),
      verifyProfile: builder.mutation<void, { code: string }>({
        query: body => ({
          url: `/v1/auth/verify-email`,
          method: 'POST',
          body,
        }),
        invalidatesTags: ['Me'],
      }),
      resetVerificationEmail: builder.mutation<void, VerificationType>({
        query: body => ({
          url: `/v1/auth/resend-verification-email`,
          method: 'POST',
          body,
        }),
        invalidatesTags: ['Me'],
      }),
      logOut: builder.mutation<void, void>({
        query: () => ({
          url: `/v1/auth/logout`,
          method: 'POST',
        }),
      }),
      refreshToken: builder.mutation<void, void>({
        query: () => ({
          url: `/v1/auth/refresh-token`,
          method: 'POST',
        }),
      }),
      forgotPassword: builder.mutation<void, RecoveryPasswordType>({
        query: ({ email, html }) => ({
          url: 'v1/auth/recover-password',
          method: 'POST',
          body: {
            email,
            html,
          },
        }),
        invalidatesTags: ['Me'],
      }),
      resetPassword: builder.mutation<void, { token: string | undefined; password: string }>({
        query: ({ token, password }) => ({
          url: `v1/auth/reset-password/${token}`,
          method: 'POST',
          body: { password },
        }),
        invalidatesTags: ['Me'],
      }),
    }
  },
})
