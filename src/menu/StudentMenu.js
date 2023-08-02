import { MultiLevelMenu, MenuItemCategory } from '@react-admin/ra-navigation'
import { useNotify } from 'react-admin'
import { Button , Box} from '@mui/material'

import LogoutIcon from '@mui/icons-material/Logout'
import { Receipt, AttachMoney, AccountCircle } from '@mui/icons-material'

import authProvider from '../providers/authProvider'

export const StudentMenu = () => {
  const logout = () => {
    authProvider.logout()
  }

  const notify = useNotify()
  const notifyNotImplemented = () => notify('En cours de développement. Ce qui présage quelques exercices pour vous 😉', { type: 'warning' })
  const whoamiId = authProvider.getCachedWhoami().id
  return (
    <Box>
      <Box>
        <MultiLevelMenu variant='categories' sx={{ width: '200px', backgroundColor: '#2c393a', color: 'white', pb: '480px' }}>
          <MenuItemCategory to='/profile' name='profile' label='Mon profil' icon={<AccountCircle />} />
          <MenuItemCategory to={whoamiId ? `/students/${authProvider.getCachedWhoami().id}/fees` : '/'} name='fees' label='Frais' icon={<AttachMoney />} />
          <MenuItemCategory to='/' name='student-grades' label='Notes' icon={<Receipt />} onClick={notifyNotImplemented} />
        </MultiLevelMenu>
      </Box>
      <Box sx={{ pb: '10px', textAlign: 'center', bgcolor: '#2c393a', color: 'white' }}>
        <Button variant='text' endIcon={<LogoutIcon />} sx={{ color: 'white', border: '0px' }} onClick={logout}>
          Se déconnecter
        </Button>
      </Box>
    </Box>
  )
}

export default StudentMenu
