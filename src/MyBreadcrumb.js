import { Breadcrumb, BreadcrumbItem } from '@react-admin/ra-navigation'
import { useCallback, useState } from 'react'
import { Color } from './utils/color'
import dataProvider from './providers/dataProvider'
import { useRecordContext } from 'react-admin'

const sxProps = {
  bgcolor: Color['500'],
  height: '5rem',
  mt: 1,
  borderRadius: '4px',
  border: '1px solid #f4f4f4',
  p: 2,
  '& li': {
    '& span': {
      color: 'white'
    },
    '&::before': {
      color: 'white'
    }
  },
  '& li:nth-child(1) > span': {
    fontWeight: 'bold'
  }
}

export const MyBreadcrumb = () => {
  const [label, setLabel] = useState('')

  const queryLabel = ({ record }) => {
    if (!record) return '...'

    if (record.ref) return record.ref

    // /!\ It is likely a fee so we fetch the student associated with that fees then take his ref
    const doFetch = async () => {
      const student = await dataProvider.getOne('students', { id: record.student_id })
      setLabel(student.data.ref)
    }
    doFetch()

    return label
  }

  return (
    <Breadcrumb sx={sxProps}>
      <BreadcrumbItem name='students' label='Étudiants'>
        <BreadcrumbItem name='show' label={queryLabel} />
        <BreadcrumbItem name='edit' label={queryLabel} />
        <BreadcrumbItem name='create' label='Créer' />
      </BreadcrumbItem>
      <BreadcrumbItem name='teachers' label='Enseignants'>
        <BreadcrumbItem name='edit' label={queryLabel} />
        <BreadcrumbItem name='show' label={queryLabel} />
        <BreadcrumbItem name='create' label='Créer' />
      </BreadcrumbItem>
      <BreadcrumbItem name='fees' label='Frais'>
        <BreadcrumbItem name='edit' label={queryLabel} />
        <BreadcrumbItem name='show' label={queryLabel} />
        <BreadcrumbItem name='create' label='Créer' />
      </BreadcrumbItem>
      <BreadcrumbItem name='profile' label='Profile' />
    </Breadcrumb>
  )
}
