import { Profile } from './pages/profile_tab.cy'
import { LoginPage } from './pages/login_page.cy'

const loginPage = new LoginPage()
const profile = new Profile()

before(function () {
    cy.fixture('credential').then(function (data) {
        globalThis.data = data
    })
})

beforeEach(function () {
    cy.visit('https://opensource-demo.orangehrmlive.com')
    loginPage.enterUsername(data.valid.username)
    loginPage.enterPassword(data.valid.password)
    loginPage.clickLogin()
})

describe('Profile Tab Test', () => {
    it('Profile tab ', () => {
        profile.clickProfile()
    })
    it('Profile tab About', () => {
        profile.clickProfile()
        profile.clickAbout()
    })
    it('Profile tab Support', () => {
        profile.clickProfile()
        profile.clickSupport()
    })
    it('Profile tab Change Pws', () => {
        profile.clickProfile()
        profile.clickChangePws()
    })
    it('Profile tab Logout', () => {
        profile.clickProfile()
        profile.clickLogout()
    })
    it('Search module', () => {
        profile.searchModule()
    })
})
