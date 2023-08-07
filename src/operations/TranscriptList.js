import { List, Actions, Datagrid, ResourceContextProvider } from "react-admin"
import authProvider from "../providers/authProvider"
import { useParams } from 'react-router-dom'
import { TextField } from "react-admin"

const TranscriptList = () => {
  return (
    <List
      label='transcript'
      resource="/"
    >
      <Datagrid  data={[{
        "student_id": "string",
        "semester": "S1",
        "academic_year": 0,
        "is_definitive": true,
        "creation_datetime": "2023-08-07T07:00:13.444Z"
      }]}>
        <TextField source="student_id" />
        <TextField source="semester" />
        <TextField source="academic_year" />
        <TextField source="is_definitive "/>
        <TextField source="creation_datetime" />
      </Datagrid>
    </List>
  )
}
export const Transcript = {
  List: TranscriptList
}