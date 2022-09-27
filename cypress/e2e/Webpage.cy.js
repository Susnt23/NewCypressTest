import { LoginPage } from './pages/login_page.cy'
import {Orghrmpage} from './pages/oraghrm_page.cy'

const loginPage = new LoginPage()
const orghrmPage = new Orghrmpage()

beforeEach(function () {

   cy.visit('https://opensource-demo.orangehrmlive.com')
   loginPage.enterUsername('Admin')
   loginPage.enterPassword('admin123')
   loginPage.clickLogin()
})

describe('Web Page Modules Test', () => {

   it('Admin Profile Test', () => {
      orghrmPage.clickAdmin()
      cy.contains('System Users')
   })

   it('PIM information Test', () => {
      orghrmPage.clickPIM()
      cy.contains('Employee Information')
   })

   it('Leave List Test', () => {
      orghrmPage.clickLeave()
      cy.contains('Leave List')
   })

   it('Timesheet  Test', () => {
      orghrmPage.clickTime()
      cy.contains('Select Employee')
   })

   it('Candidates Recruitment Test', () => {
      orghrmPage.clickRecruitment()
      cy.contains('Candidates')
   })

   it('Personal Information Check', () => {
      orghrmPage.clickMyInfo()
      cy.contains('Personal Details')
   })

   it('Performance  Test', () => {
      orghrmPage.clickPerformance()
      cy.contains('Employee Reviews')
   })

   it('Dashboard Test', () => {
      orghrmPage.clickDashboard()
      cy.contains('Launching Soon')
   })

   it('Directory Test', () => {
      orghrmPage.clickDirectory()
      cy.contains('Directory')
   })

   it('Maintainance Test', () => {
      orghrmPage.clickMaintain()
      cy.contains('Administrator Access')
   })

   it('Buzz Test', () => {
      orghrmPage.clickBuzz()
      cy.contains('Launching Soon')
   })
})