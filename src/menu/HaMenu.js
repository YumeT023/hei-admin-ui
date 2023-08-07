import authProvider from '../providers/authProvider'
import StudentMenu from './StudentMenu'
import ManagerMenu from './ManagerMenu'
import TeacherMenu from './TeacherMenu'
import { WhoamiRoleEnum } from '../gen/haClient'
import { Box, Stack, Button, Avatar, Typography } from '@mui/material'
import { Logout as LogoutIcon } from '@mui/icons-material'

export const alpha = alpha => `rgb(240, 164, 8, ${alpha})`

// TODO: find a better place where to put this
const Logout = () => (
  <Box sx={{ textAlign: 'center', color: 'white', pb: '20px' }}>
    <Button variant='text' endIcon={<LogoutIcon />} sx={{ color: 'white' }} onClick={authProvider.logout}>
      Se déconnecter
    </Button>
  </Box>
)

const HaMenuHeader = () => (
  <Stack direction='row' alignItems='center' gap={1.5}>
    <Avatar variant='rounded' sx={{ bgcolor: 'rgb(252, 175, 59)' }} />
    <Typography component='b'>HEI Admin</Typography>
  </Stack>
)

const HaMenuWrapper = ({ children }) => (
  <Box
    sx={{
      height: '100vh',
      borderRadius: '8px',
      justifyContent: 'space-between',
      flexDirection: 'column',
      display: 'flex',
      width: '275px',
      flex: '1',
      p: 1
    }}
  >
    <Stack sx={{ height: '100%', p: 1.5, border: '1px solid #f7f7f7', borderRadius: 2, gap: 2 }}>
      <HaMenuHeader />
      {children}
    </Stack>
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
    <Box>
      <Menu role={authProvider.getCachedWhoami().role} />
    </Box>
  </HaMenuWrapper>
)

export default HaMenu
