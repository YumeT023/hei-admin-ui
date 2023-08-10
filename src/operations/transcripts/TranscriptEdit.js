import { DateTimeInput, Edit, Form } from "react-admin";
import { Box } from "@mui/material"
import { BoolInput, Input, Save } from "../utils";

const TranscriptEdit = props => {
    return (
        <Edit>
            <Form>
                <Box sx={{mt: '20px', ml: '50px',display:'flex',flexDirection:'row',}}>
                    <Box>
                        <Input placeholder="Semestre" source='semester'/>
                        <Input placeholder="Année académique" source='academic_year'/>
                    </Box>
                    <Box sx={{m:'20px'}}>
                        <BoolInput label="Définitive" source='is_definitive'/>
                        <Input placeholder="Date de création" source="creation_datetime" type='datetime-local'/>
                        <Save/>
                    </Box>
                    
                </Box>
            </Form>
        </Edit>
    )
}

export default TranscriptEdit;