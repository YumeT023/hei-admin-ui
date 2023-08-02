import { MenuItemCategory, MultiLevelMenu } from '@react-admin/ra-navigation'
import { useNotify } from 'react-admin'
import { Box } from '@mui/material'

import { AccountCircle, AttachMoney, Receipt } from '@mui/icons-material'

import authProvider from '../providers/authProvider'

export const StudentMenu = () => {
  const notify = useNotify()
  const notifyNotImplemented = () => notify('En cours de développement. Ce qui présage quelques exercices pour vous 😉', { type: 'warning' })
  const whoamiId = authProvider.getCachedWhoami().id
  return (
    // TODO: move 'height' sx in haTheme
    <Box sx={{ flex: 1 }}>
      <MultiLevelMenu variant='categories' sx={{ width: '200px', backgroundColor: '#2c393a', color: 'white' }}>
        <MenuItemCategory to='/profile' name='profile' label='Mon profil' icon={<AccountCircle />} />
        <MenuItemCategory to={whoamiId ? `/students/${authProvider.getCachedWhoami().id}/fees` : '/'} name='fees' label='Frais' icon={<AttachMoney />} />
        <MenuItemCategory to='/' name='student-grades' label='Notes' icon={<Receipt />} onClick={notifyNotImplemented} />
      </MultiLevelMenu>
    </Box>
  )
}

export default StudentMenu
