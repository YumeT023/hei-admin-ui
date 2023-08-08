import { TextInput } from 'react-admin'
import { Box, Typography } from '@mui/material'

const Input = props => {
  const { source, placeholder, type, name, disabled, validate } = props

  return (
    <Box>
      <Typography sx={{ fontWeight: 'bold' }}>{placeholder}</Typography>
      <TextInput
        source={source}
        placeholder={placeholder}
        variant='outlined'
        label=''
        type={type}
        name={name}
        disabled={disabled}
        validate={validate}
        sx={{ width: '500px', height: '50px' }}
      />
    </Box>
  )
}

export default Input
