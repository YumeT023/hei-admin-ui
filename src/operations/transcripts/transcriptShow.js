import { useEffect, useState, useRef } from 'react'
import { Show, SimpleShowLayout, TextField, useShowContext } from 'react-admin'
import { Stack, Box, Typography, TextField as MuiTextField, Button } from '@mui/material'
import { toApiIds } from '../../providers/transcriptsProvider'
import { Color } from '../../utils/color'
import { transcriptApi } from '../../providers/api'
import { v4 as uuid } from 'uuid'
import { useForm } from 'react-hook-form'

const TranscriptClaim = ({ claim, studentId }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      ...claim
    }
  })

  const updateClaim = async values => {
    try {
      await transcriptApi().putStudentClaimsOfTranscriptVersion(studentId, values.transcript_id, values.transcript_version_id, values.id, values)
    } catch (e) {
      console.log('error', e)
    }
  }

  return (
    <li key={claim.id}>
      <Typography>{claim.reason}</Typography>
      <input {...register('reason')} />
      <select {...register('status')}>
        <option value='OPEN'>OPEN</option>
        <option value='CLOSE'>CLOSE</option>
      </select>
      <button onClick={handleSubmit(updateClaim)}>Mettre à jour</button>
    </li>
  )
}

// nb: notice how i separate this from the main Transcript details
// not only i can access the ShowContext (which contains the record, ... everything)
// but the responsibilities is also well defined
const TranscriptVersionsView = () => {
  const [claims, setClaims] = useState([])
  const { record } = useShowContext()
  const { studentId, transcriptId } = toApiIds(record.id)
  const claimInputRef = useRef(null)

  useEffect(() => {
    const doFetch = async () => {
      const res = await transcriptApi().getStudentTranscriptClaims(studentId, transcriptId, 'versionId')
      setClaims(res.data)
    }
    doFetch()
  }, [transcriptId, studentId])

  const submitClaim = async ev => {
    ev.preventDefault()
    const { value } = claimInputRef.current
    if (value) {
      try {
        const tsVersionId = 'versionId'
        const id = uuid()
        const studentTsClaim = {
          id,
          transcript_id: transcriptId,
          transcript_version_id: tsVersionId,
          reason: value,
          creation_datetime: new Date().toISOString()
        }
        await transcriptApi().putStudentClaimsOfTranscriptVersion(studentId, transcriptId, tsVersionId, id, studentTsClaim)
        claimInputRef.current.value = ''
      } catch (e) {
        console.warn('error', e)
      }
    }
  }

  return (
    <Stack direction='row' justifyContent='space-between' border='1px solid #f4f4f4' mt={1} p={3} h='auto' spacing={2}>
      <Box>
        <form onSubmit={submitClaim}>
          <MuiTextField variant='outlined' size='small' placeholder='reason' inputRef={claimInputRef} />
          <Button
            type='submit'
            sx={{
              mt: '0.5rem',
              display: 'block',
              bgcolor: Color['100'],
              color: Color['500'],
              '&:hover': {
                bgcolor: '#FDEAC4',
                boxShadow: 'none'
              }
            }}
          >
            Submit claim
          </Button>
        </form>
      </Box>

      <Box sx={{ flex: 1, bgcolor: 'red' }}>
        <ul>
          {claims.map(claim => {
            return <TranscriptClaim key={claim.id} claim={claim} studentId={studentId} />
          })}
        </ul>
      </Box>
    </Stack>
  )
}

const TranscriptShow = () => {
  return (
    <>
      <Show resource={'transcripts'} title={' '}>
        <SimpleShowLayout>
          <TextField source={'semester'} label={'Semestre'} />
          <TextField source={'academic_year'} label={'Année académique'} />
          <TextField source={'creation_datetime'} label={'Date de création'} />
        </SimpleShowLayout>
        <TranscriptVersionsView />
      </Show>
    </>
  )
}

export default TranscriptShow
