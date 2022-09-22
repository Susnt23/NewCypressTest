import { AdminPage } from './pages/admin_page.cy'
import { LoginPage } from './pages/login_page.cy'
import { Orghrmpage } from './pages/oraghrm_page.cy'

const loginPage = new LoginPage()
const orghrmPage = new Orghrmpage()
const adminPage = new AdminPage()

beforeEach(function () {

    cy.visit('https://opensource-demo.orangehrmlive.com')
    loginPage.enterUsername('Admin')
    loginPage.enterPassword('admin123')
    loginPage.clickLogin()

})

describe('Admin module Test', () => {

    it('Add Sysytem Users', () => {


        orghrmPage.clickAdmin()

        adminPage.enterUser('Admin')
        adminPage.enterEmpName('Paul Collings')
        adminPage.enterUserRole()
        adminPage.selectUserRole()
        cy.get('.oxd-form-actions > .oxd-button--secondary').click()


    })
})    