import React from 'react'
import { Admin } from '@react-admin/ra-enterprise'
import { CustomRoutes, Resource } from 'react-admin'

import { Route } from 'react-router-dom'

import dataProvider from './providers/dataProvider'
import authProvider from './providers/authProvider.ts'

import polyglotI18nProvider from 'ra-i18n-polyglot'
import frenchMessages from 'ra-language-french'

import profile from './operations/profile'
import students from './operations/students'
import teachers from './operations/teachers'

import fees from './operations/fees'
import payments from './operations/payments'
import transcripts from './operations/transcripts'
import studentGrades from './operations/studentGrades'

import MyLayout from './HaLayout'
import HaLoginPage from './security/LoginPage'
import { mainTheme } from './haTheme'
import TranscriptVersionsShow from './operations/transcripts/transcriptVersionShow'

const FeeCreate = React.lazy(() => import('./operations/fees/FeesCreate'))

const App = () => (
  <Admin
    title='HEI Admin'
    authProvider={authProvider}
    dataProvider={dataProvider}
    i18nProvider={polyglotI18nProvider(() => frenchMessages, 'fr')}
    loginPage={HaLoginPage}
    layout={MyLayout}
    requireAuth
    theme={mainTheme}
  >
    <Resource name='profile' />
    <Resource name='students' {...students} />
    <Resource name='teachers' {...teachers} />

    <Resource name='fees' {...fees} />
    <Resource name='payments' {...payments} />

    <Resource name='student-grades' {...studentGrades} />
    <Resource name='transcripts' {...transcripts} />
    <Resource name='transcripts-versions' show={<TranscriptVersionsShow/>} />
    <Resource name='claims' />

    <CustomRoutes>
      <Route exact path='/profile' element={<profile.show />} />

      <Route exact path='/students/:studentId/fees' element={<fees.list />} />
      <Route exact path='/students/:studentId/transcripts' element={<transcripts.list />} />
      <Route exact path='/students/:studentId/transcripts/:transcriptId/show' element={<transcripts.show />} />
      <Route exact path='/students/:studentId/transcripts/:transcriptId/versions/:versionId/show' element={<TranscriptVersionsShow />} />

      <Route
        exact
        path='/students/:studentId/fees/create'
        element={
          <React.Suspense fallback='Veuillez patienter...'>
            <FeeCreate />
          </React.Suspense>
        }
      />
      <Route exact path='/fees/:feeId/show' element={<fees.show />} />
      <Route exact path='/fees' element={<fees.listByStatus />} />

      <Route exact path='/fees/:feeId/payments' element={<payments.list />} />
      <Route exact path='/fees/:feeId/payments/create' element={<payments.create />} />
    </CustomRoutes>
  </Admin>
)

export default App
