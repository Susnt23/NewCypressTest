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

})
