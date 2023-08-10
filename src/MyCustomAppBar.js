import { AppBar as DefaultAppBar, AppBarClasses } from 'react-admin'
import { IconButton, Tooltip, Typography } from '@mui/material'
import { Lock } from '@mui/icons-material'
import authProvider from './providers/authProvider'

const CustomAppBar = props => {
  return (
    <DefaultAppBar {...props} userMenu={<UserMenu {...props} color='transparent' />}>
      <Typography variant='h6' color='inherit' className={AppBarClasses.title} id='react-admin-title' />
      {props.children}
    </DefaultAppBar>
  )
}