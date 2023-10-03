import { ComponentPropsWithoutRef, ElementRef, FC, forwardRef } from 'react'

import cn from 'classnames'

import s from './header.module.scss'

import { Logo, LogOutOutline, Profile } from '@/assets'
import { Button, Dropdown, Typography } from '@/components'
import { Avatar } from '@/components/ui/avatar'
import { DropdownItem, DropdownItemWithIcon } from '@/components/ui/dropdown/dropdonItem'
import { HeaderProfileInfo } from '@/components/ui/header/headerProfileInfo'
type HeaderProps = {
  isLoggedIn: boolean
  name?: string
  avatar?: string
  email?: string
  className?: string
} & ComponentPropsWithoutRef<'header'>
export const Header: FC<HeaderProps> = forwardRef<ElementRef<'header'>, HeaderProps>(
  ({ name, isLoggedIn, className, ...rest }) => {
    const classNames = {
      root: cn(s.root, className),
      headerContainer: s.headerContainer,
      logo: s.logo,
      userName: s.userName,
      profileInfoWrapper: s.profileInfoWrapper,
      dropdownItemWrapper: s.dropdownItemWrapper,
    }

    return (
      <header className={`${s.header} ${className}`} {...rest}>
        <Logo />
        {isLoggedIn ? (
          <div className={classNames.profileInfoWrapper}>
            <Typography variant={'subtitle1'}>{name}</Typography>
            <Dropdown trigger={<Avatar size={'small'} image={'avatar'} userName={'name'} />}>
              <DropdownItem>
                <HeaderProfileInfo />
              </DropdownItem>
              <DropdownItemWithIcon icon={<Profile />} text={'My Profile'} />
              <DropdownItemWithIcon icon={<LogOutOutline />} text={'Sign Out'} />
            </Dropdown>
          </div>
        ) : (
          <Button
            as={'a'}
            href="https://www.youtube.com/watch?v=j7Wbb2Bcd9c&list=PLMH1EP4byJHRnHhGr4-madQs_PNRTGXft&index=2&t=912s"
            variant={'primary'}
          >
            Sign in
          </Button>
        )}
      </header>
    )
  }
)
