import { useEffect, useState, useRef, useCallback } from 'react'
import { Show, SimpleShowLayout, TextField, useNotify, useShowContext } from 'react-admin'
import { Stack, Box, TextField as MuiTextField, Button, Typography, Chip, Dialog } from '@mui/material'
import { toApiIds } from '../../providers/transcriptsProvider'
import { Color } from '../../utils/color'
import { transcriptApi } from '../../providers/api'
import { v4 as uuid } from 'uuid'

const renderClaimStatus = (status) => {
  const bgcolor = status === "OPEN" ? "#149334" : "#B71816";
  return <Chip label={status.toLowerCase()} sx={{ m: 2, color: 'white', bgcolor }} size="small" />
}

const TranscriptClaim = ({ claim }) => {
  /*
   * TODO: update claim
   * <MuiTextField variant='outlined' {...register('reason')} />
   * <Select {...register('status')} size='small'>
   *   <MenuItem value='OPEN'>OPEN</MenuItem>
   *   <MenuItem value='CLOSE'>CLOSE</MenuItem>
   * </Select>
   * <Button
   *   onClick={handleSubmit(update)}
   *   sx={{
   *     mt: '0.5rem',
   *     display: 'block',
   *     bgcolor: Color['100'],
   *     color: Color['500'],
   *     '&:hover': {
   *       bgcolor: '#FDEAC4',
   *       boxShadow: 'none'
   *     }
   *   }}
   * >
   *   confirmer
   * </Button>
   * */
  return (
    <Stack alignItems='center' direction='row' justifyContent='space-between' my={1}>
      <Typography>{claim.reason}</Typography>
      {renderClaimStatus(claim.status)}
    </Stack>
  )
}

// nb: notice how i separate this from the main Transcript details
// not only i can access the ShowContext (which contains the record, ... everything)
// but the responsibilities is also well defined
const TranscriptVersionsView = () => {
  const [claims, setClaims] = useState([])
  const notify = useNotify()
  const { record } = useShowContext()
  const { studentId, transcriptId } = toApiIds(record.id)
  const claimInputRef = useRef(null)

  const getTranscriptClaims = useCallback(async () => {
    const res = await transcriptApi().getStudentTranscriptClaims(studentId, transcriptId, 'versionId')
    setClaims(res.data)
  }, [setClaims, studentId, transcriptId])

  useEffect(() => {
    getTranscriptClaims();
  }, [transcriptId, studentId, getTranscriptClaims])

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
        notify('Réclamation soumis avec succès', { type: 'success' })
        claimInputRef.current.value = ''
        getTranscriptClaims();
      } catch (e) {
        console.warn('error', e)
      }
    }
  }

  return (
    <Stack direction='row' justifyContent='space-between' border='1px solid #f4f4f4' mt={1} p={3} h='auto' spacing={2}>
      <Box sx={{ width: '50%' }}>
        <form onSubmit={submitClaim}>
          <MuiTextField variant='outlined' size='small' placeholder='Raison' inputRef={claimInputRef} />
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
            Soumettre
          </Button>
        </form>
      </Box>

      <Box sx={{ flex: 1, overflowY: 'scroll', maxHeight: '25rem' }}>
        {claims.map(claim => {
          return (
            <TranscriptClaim key={claim.id} />
          )
        })}
      </Box>

      <Dialog open={true}>
        <MuiTextField variant='outlined' size='small' placeholder='Raison' inputRef={claimInputRef} />
      </Dialog>
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
