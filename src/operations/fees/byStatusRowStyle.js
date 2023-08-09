import { mainTheme } from '../../haTheme'

const rowStyle = (record, _index) => {
  const lateColor = record.status === 'LATE' ? mainTheme.palette.error.light : 'inherit'
  return (
    record.status === 'PAID' ? {
      backgroundColor:mainTheme.palette.grey[300],
      "& :hover":{
        backgroundColor:mainTheme.palette.grey[600]
      }
    } : {backgroundColor:lateColor}
  )
}
export default rowStyle
