import { Create, Form, SaveButton } from 'react-admin'
import { SexRadioButton, TurnsStringIntoDate } from '../utils'
import Input from '../utils/Input'

import { Box } from '@mui/material'
import { Save } from '../utils/Save'

const transformTeacher = teacher => {
  teacher.entrance_datetime = TurnsStringIntoDate(teacher.entrance_datetime)
  return teacher
}
const TeacherCreate = () => (
  <Create title='Enseignants' transform={transformTeacher}>
    <Form>
      <Box sx={{ display: 'flex', flexDirection: 'row', mt: '30px',ml:'80px'}}>
        <Box>
          <Input source='last_name' placeholder='Nom' />
          <Input source='first_name' placeholder='Prénoms' />
          <Input source='birth_date' placeholder='Date de naissance' type='date' />
          <Input multiline source='address' placeholder='Adresse' />
          <SexRadioButton />
        </Box>
        <Box sx={{ ml: '70px' }}>
          <Input source='ref' placeholder='Référence' />

          <Input source='phone' placeholder='Téléphone' />

          <Input source='email' placeholder='Email' />
          <Input source='entrance_datetime' placeholder="Date d'entrée chez HEI" type='date' />
          <Save />
        </Box>
      </Box>
    </Form>
  </Create>
)
export default TeacherCreate
