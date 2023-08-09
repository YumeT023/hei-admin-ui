import { MenuItemCategory as Item } from '@react-admin/ra-navigation'
import { CardContent, Typography} from '@mui/material'
import { AccountCircleOutlined, SchoolOutlined, PeopleOutlined, WorkOutlined, WarningOutlined } from '@mui/icons-material'
import { HaMenuListContainer } from './HaMenu'
import { AccountCircle, School, People, Work, Warning } from '@mui/icons-material'

export const ManagerMenu = () => (
  <HaMenuListContainer variant='categories'>
    <Item to='/profile' name='profile' label='Mon profil' icon={<AccountCircleOutlined />} />

    <Item to='/teachers' name='teachers' label='Enseignants' icon={<Work />} />

    <Item name='students' label='Étudiants' icon={<SchoolOutlined />}>
      <CardContent>
        <Typography variant='h6' gutterBottom>
          Opérations sur les étudiants
        </Typography>
        <HaMenuListContainer>
          <Item to='/students' name='students' label='Liste des étudiants' icon={<PeopleOutlined />} />
          <Item to='/fees' name='fees' label='Frais en retard' icon={<WarningOutlined />} />
        </HaMenuListContainer>
      </CardContent>
    </Item>
  </HaMenuListContainer>
)

export default ManagerMenu
