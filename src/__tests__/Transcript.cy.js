import { mount, unmount } from '@cypress/react'
import App from '../App'
import specTitle from 'cypress-sonarqube-reporter/specTitle'
import {
  manager1Mock,
  student1Mock,
  studentNameToBeCheckedMock,
  studentsMock, teacher1Mock, teacherNameToBeCheckedMock, teachersMock,
  whoamiManagerMock
} from './mocks/responses'
import { transcript1Mock, transcriptsMock } from './mocks/responses/transcripts-api'

describe(specTitle('Transcripts'), () => {
    beforeEach(() => {
        mount(<App/>)
        cy.intercept('GET', `/whoami`, whoamiManagerMock).as('getWhoami')
        cy.intercept('GET', `/managers/${manager1Mock.id}`, req => {
          req.reply(res => {
            res.setDelay(500)
            res.send(manager1Mock)
          })
        }).as('getManager1')
      cy.intercept('GET', `/students?page=1&page_size=10`, studentsMock).as('getStudentsPage1')
      cy.intercept('GET', `/students?page=2&page_size=10`, studentsMock).as('getStudentsPage2')
      cy.intercept('GET', `/students?page=1&page_size=10&last_name=${studentNameToBeCheckedMock}`, [student1Mock]).as('getStudentsByName')
      cy.intercept('GET', `/teachers?page=1&page_size=10`, teachersMock).as('getTeachersPage1')
      cy.intercept('GET', `/teachers?page=2&page_size=10`, teachersMock).as('getTeachersPage2')
      cy.intercept('GET', `/teachers?page=1&page_size=10&first_name=${teacherNameToBeCheckedMock}`, [teacher1Mock]).as('getTeacherByName')
    })

    it('can list all transcripts for a student', () => {
      cy.intercept('GET', `/students/${student1Mock.id}/transcripts`, transcriptsMock).as('getTranscripts')
      cy.wait('@getWhoami')
      cy.contains('Étudiants')
      cy.get(`[href="#/students/${student1Mock.id}/transcripts"]`)
      cy.get('body')
      cy.contains('Semestre')
      cy.contains('Année académique')
      cy.contains(transcript1Mock.academic_year)
      cy.contains(transcript1Mock.semester)
      unmount()
    })

})