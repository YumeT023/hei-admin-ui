import { List, Datagrid, SimpleShowLayout } from "react-admin"
import { TextField } from "react-admin"
import { TableCell } from '@mui/material';
import { maxPageSize } from "../providers/dataProvider"

const TranscriptList = () => {
  return (
    <List
      label='transcript'
      resource="/transcript"
      actions={false}
      perPage={maxPageSize}
    >
      <Datagrid expand={<ExpandedRow />} bulkActionButtons={false} data={[{
        "student_id": "string",
        "semester": "S1",
        "academic_year": 0,
        "is_definitive": true,
        "creation_datetime": "2023-08-07T07:00:13.444Z"
      }]}>
        <TextField source="student_id"/>
        <TextField source="semester" />
        <TextField source="academic_year" />
        <TextField source="is_definitive" />
        <TextField source="creation_datetime" />
      </Datagrid>
    </List>
  )
}


const ExpandedRow = ({record}) =>{
  return (
    <SimpleShowLayout record={record}>
        <TextField source="student_id" />
        <TextField source="semester" />
        <TextField source="academic_year" />
        <TextField source="is_definitive" />
        <TextField source="creation_datetime" />
    </SimpleShowLayout>
  )
}

export const Transcript = {
  list: TranscriptList
}
