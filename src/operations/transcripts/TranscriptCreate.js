import { Create, Form } from "react-admin"
import { BoolInput, Input, Save } from "../utils";

import { Box} from '@mui/material'

const TranscriptsCreate = props => {
    return (
    <>
        <Create title={"Relevé de notes"} resource='transcripts'>
            <Form>
              <Box sx={{mt: '20px', ml: '50px', display:'flex',flexDirection:'row'}}>
                <Box>
                  <Input placeholder="Semestre" source='semester'/>
                  <Input placeholder="Année académique" source='academic_year'/>
                </Box>
                <Box sx={{m:'20px'}}>
                  <BoolInput placeholder="Définitive" source='is_definitive'/>
                  <Input label="" placeholder="Date de création" source="creation_datetime" type='datetime-local'/>
                  <Save/>
                </Box>                
              </Box>
            </Form>   
        </Create>
    </>
    )
}

export default TranscriptsCreate;