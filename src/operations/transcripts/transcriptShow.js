import { Show, SimpleShowLayout, TextField, useShowContext, List, Datagrid } from 'react-admin'
import { useEffect, useState } from 'react'
import transcriptsVersionsProvider from '../../providers/transcriptsVersionsProvider'
import { toApiIds } from '../../providers/transcriptsProvider'


// nb: notice how i separate this from the main Transcript details
// not only i can access the ShowContext (which contains the record, ... everything)
// but the responsibilities is also well defined
const TranscriptVersions = () => {
  const [versions, setVersions] = useState([])
  const { record } = useShowContext()
  const { studentId, transcriptId } = toApiIds(record.id)

  useEffect(() => {
    const doFetch = async () => {
      const versionsData = await transcriptsVersionsProvider.getList(studentId, transcriptId, 1, 10)
      setVersions(versionsData)
    }
    doFetch()
  }, [studentId, transcriptId])

  return (
    <div>
      {/*versions.length === 0 ? (
        'Pas de données'
      ) : (
        <div>
          {versions.map(record => (
            <>
              <span>{record.id}</span>
              <span>{record.transcript_id}</span>
              <span>{record.created_by_user_id}</span>
            </>
          ))}
        </div>
          )*/}

              <List>
              <Datagrid data={versions}>
                <TextField source="id" />
                <TextField source="transcript_id" />
                <TextField source="created_by_user_id" />
              </Datagrid>
              </List>        

    </div>
  )
}

const TranscriptShow = () => {
  return (
    <Show resource={'transcripts'} title={'Transcript'}>
      <SimpleShowLayout>
        <TextField source={'semester'} label={'Semestre'} />
        <TextField source={'academic_year'} label={'Année académique'} />
        <TextField source={'creation_datetime'} label={'Date de création'} />
      </SimpleShowLayout>

      <TranscriptVersions />
    </Show>
  )
}


export default TranscriptShow
