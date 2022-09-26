
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

    it('Search Sysytem Users', () => {

        orghrmPage.clickAdmin()
        adminPage.enterUser('Admin')
        adminPage.enterEmpName('Paul Collings')
        adminPage.enterUserRole()
        adminPage.selectUserRole()
        adminPage.enterStatus()
        adminPage.selectStatus()
        adminPage.clickSearch()
        adminPage.clickAdd()

    })

    it('Add New Users', () => {

        orghrmPage.clickAdmin()
        adminPage.clickAdd()
        adminPage.newEmpname('Sushant Khadka')
        adminPage.newEmpUsername('Susnt')
        adminPage.newPassword('Hello@23')
        adminPage.confirmPassword('Hello@23')
        adminPage.enterNewUserRole()
        adminPage.selectNewUserRole()
        adminPage.enterNewStatus()
        adminPage.selectNewStatus()
        adminPage.clickSave()

    })

    it('Cancel Add New USer', () => {

        orghrmPage.clickAdmin()
        adminPage.clickAdd()
        adminPage.clickCancel()

    })

})    