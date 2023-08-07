import { List, Actions, Datagrid, ResourceContextProvider, DatagridBody } from "react-admin"
import authProvider from "../providers/authProvider"
import { useParams } from 'react-router-dom'
import { TextField } from "react-admin"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { TableRow, TableCell } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { maxPageSize } from "../providers/dataProvider"
import { RecordContextProvider } from "react-admin";

const TranscriptList = () => {
  return (
    <List
      label='transcript'
      resource="/"
      perPage={maxPageSize}
    >
      <MyDatagrid data={[{
        "student_id": "string",
        "semester": "S1",
        "academic_year": 0,
        "is_definitive": true,
        "creation_datetime": "2023-08-07T07:00:13.444Z"
      }]}>
        <TextField source="student_id" />
        <TextField source="semester" />
        <TextField source="academic_year" />
        <TextField source="is_definitive " />
        <TextField source="creation_datetime" />
      </MyDatagrid>
    </List>
  )
}

export const Transcript = {
  List: TranscriptList
}

const MyDatagrid = (props) => {
  return <Datagrid {...props} body={<MyDatagridBody />} />
}

const MyDatagridBody = (props) => {
  return <DatagridBody {...props} row={<MyDatagridrow />} />
}

const MyDatagridrow = (props) => {
  return (
    <RecordContextProvider value={props.record}>
      <AccordionRow>
        {props.children.map((each, field) => (
          <TableCell key={`transcript-${field}`}>
            {each}
          </TableCell>
        ))}
      </AccordionRow>
      {/* data columns based on children */}
    </RecordContextProvider>
  )
}
const AccordionRow = ({ children }) => {
  return (
    <TableRow>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          {children}
        </AccordionSummary>
        <AccordionDetails>
          <>test bro</>
        </AccordionDetails>
      </Accordion>
    </TableRow>
  )
}