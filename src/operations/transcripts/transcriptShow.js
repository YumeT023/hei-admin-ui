import { Datagrid, Show, TextField } from 'react-admin'
import { useEffect, useState } from 'react'
import transcriptsVersionsProvider from '../../providers/transcriptsVersionsProvider'
import { useParams } from 'react-router-dom'

const TranscriptShow = () => {

  const [ versions, setVersions ] = useState([])
  const [ claims, setClaims ] = useState([])

  const { studentId, transcriptId } = useParams()

  useEffect(() => {
    const effect = async () => {
      const versionsData = await transcriptsVersionsProvider.getList(studentId, transcriptId, 1, 10)
      setVersions(versionsData);
    }
    effect()
  }, [versions])

  return (
    <>
        <Show resource={'transcripts'} title={'Transcript'} >
            <div>
              <TextField source={'semester'} label={'Semestre'} />
              <TextField source={'academic_year'} label={'Année académique'} />
              <TextField source={'creation_datetime'} label={'Date de création'} />
            </div>
            <Datagrid data={versions} bulkActionButtons={false}>
            </Datagrid>
        </Show>
    </>
  )
}

export default TranscriptShow;