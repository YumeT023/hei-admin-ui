import { TextInput } from 'react-admin'
import { Box, Typography } from '@mui/material'

const Input = props => {
  const { source, placeholder, type } = props

  return (
    <Box>
      <Typography sx={{ fontWeight: 'bold' }}>{placeholder}</Typography>
      <TextInput source={source} placeholder={placeholder} variant='outlined' label='' type={type} sx={{ width: '500px', height: '50px' }} />
    </Box>
  )
}

export default Input
