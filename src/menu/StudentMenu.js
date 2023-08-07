import { MultiLevelMenu as Menu, MenuItemCategory as Item } from '@react-admin/ra-navigation'
import { alpha } from './HaMenu'
import { useNotify } from 'react-admin'

import { AccountCircleOutlined, AttachMoneyOutlined, ReceiptOutlined } from '@mui/icons-material'

import authProvider from '../providers/authProvider'

export const StudentMenu = () => {
  const notify = useNotify()

  const notifyNotImplemented = () => notify('En cours de développement. Ce qui présage quelques exercices pour vous 😉', { type: 'warning' })

  const whoamiId = authProvider.getCachedWhoami().id

  return (
    <Menu
      sx={{
        '& .RaMultiLevelMenu-list': {
          gap: '0.5rem'
        },
        '& .RaMenuItemCategory-container': {
          p: 0,
          bgcolor: 'transparent',
          '& span': {
            fontWeight: 'bold',
            fontSize: '14px'
          }
        },
        '& .RaMenuItemCategory-link': {
          flexDirection: 'row !important',
          gap: '1rem',
          p: '8px',
          borderRadius: '6px',
          width: '100%',
          '&.active, &:hover': {
            bgcolor: '#FDEAC4',
            color: '#F8BF4F'
          }
        }
      }}
    >
      <Item to='/profile' name='profile' label='Mon profil' icon={<AccountCircleOutlined />} sx={{ flexDirection: 'row' }} />
      <Item to={whoamiId ? `/students/${whoamiId}/fees` : '/'} name='fees' label='Frais' icon={<AttachMoneyOutlined />} />
      <Item to='/' name='student-grades' label='Notes' icon={<ReceiptOutlined />} onClick={notifyNotImplemented} />
    </Menu>
  )
}

export default StudentMenu
