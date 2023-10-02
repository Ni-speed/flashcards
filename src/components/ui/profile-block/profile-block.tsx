import { FC } from 'react'

import s from './profile-block.module.scss'

import { Typography } from '@/components/ui'
import { Avatar } from '@/components/ui/avatar'

type PropsType = {
  data?: any /*ResponseUserType | null*/
}
export const ProfileBlock: FC<PropsType> = ({ data }) => {
  return (
    <div className={s.infoBlock}>
      <Avatar src={data?.avatar} name={data?.name} />
      <div className={s.info}>
        <Typography variant={'subtitle2'}>{data?.name}</Typography>
        <Typography variant={'caption'} className={s.email}>
          {data?.email}
        </Typography>
      </div>
    </div>
  )
}
