import authProvider from '../providers/authProvider'
import StudentMenu from './StudentMenu'
import ManagerMenu from './ManagerMenu'
import TeacherMenu from './TeacherMenu'
import { WhoamiRoleEnum } from '../gen/haClient'
import { Box, Button } from '@mui/material'
import { Logout as LogoutIcon } from '@mui/icons-material'

const Logout = () => (
  <Box sx={{ textAlign: 'center', bgcolor: '#2c393a', color: 'white' }}>
    <Button variant='text' endIcon={<LogoutIcon />} sx={{ color: 'white', border: '0px' }} onClick={authProvider.logout}>
      Se déconnecter
    </Button>
  </Box>
)

const HaMenuWrapper = ({ children }) => (
  <Box
    sx={{
      height: '100vh',
      justifyContent: 'space-between',
      flexDirection: 'column',
      display: 'flex'
    }}
  >
    {children}
    <Logout />
  </Box>
)

const Menu = ({ role }) => {
  switch (role) {
    case WhoamiRoleEnum.Student:
      return <StudentMenu />
    case WhoamiRoleEnum.Manager:
      return <ManagerMenu />
    case WhoamiRoleEnum.Teacher:
      return <TeacherMenu />
    default:
      throw new Error('Unexpected role ' + role)
  }
}

const HaMenu = () => (
  <HaMenuWrapper>
    <Menu role={authProvider.getCachedWhoami().role} />
  </HaMenuWrapper>
)

export default HaMenu
