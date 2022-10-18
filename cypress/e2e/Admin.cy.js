import { AdminPage } from './pages/admin_page.cy'
import { LoginPage } from './pages/login_page.cy'
import { Orghrmpage } from './pages/oraghrm_page.cy'

const loginPage = new LoginPage()
const orghrmPage = new Orghrmpage()
const adminPage = new AdminPage()

before(function () {
    cy.fixture('example').then(function (data) {
        globalThis.data = data
    })
})

beforeEach(function () {
    cy.visit('https://opensource-demo.orangehrmlive.com')
    loginPage.enterUsername(data.valid.username)
    loginPage.enterPassword(data.valid.password)
    loginPage.clickLogin()
})

describe('Admin Module Test', () => {
    it('Search Sysytem Users', () => {
        orghrmPage.clickAdmin()
        adminPage.enterUser(data.valid.username)
        adminPage.enterEmpName(data.emp.empname)
        adminPage.enterUserRole()
        adminPage.selectUserRole()
        adminPage.enterStatus()
        adminPage.selectStatus()
        adminPage.clickSearch()
        adminPage.clickAdd()
    })

    it.only('Add New Users', () => {
        orghrmPage.clickAdmin()
        adminPage.clickAdd()
        adminPage.newEmpname(data.addemp.empnamea)
        adminPage.newEmpUsername(data.adduser.empuser)
        adminPage.newPassword(data.newpws.newpass)
        adminPage.confirmPassword(data.confpws.cpass)
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