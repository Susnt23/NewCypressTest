import { LoginPage } from "./pages/login_page.cy";

const loginPage = new LoginPage()

before(function () {
   cy.fixture('credential').then(function (data) {
      globalThis.data = data
   })
})

beforeEach(function () {
   cy.visit('https://opensource-demo.orangehrmlive.com')
})

context('Login Page Tests', () => {

   it('Login test with valid credentials', () => {
      loginPage.enterUsername(data.valid.username)
      loginPage.enterPassword(data.valid.password)
      loginPage.clickLogin()
      cy.get('.oxd-main-menu-search').click()
   })

   it('Login test with invalid username', () => {
      loginPage.enterUsername(data.invaliduser.username)
      loginPage.enterPassword(data.invaliduser.password)
      loginPage.clickLogin()
      cy.get('.oxd-main-menu-search').click()
   })

   it('Login test with invalid username ', () => {
      loginPage.enterUsername(data.invalidpass.username)
      loginPage.enterPassword(data.invalidpass.password)
      loginPage.clickLogin()
      cy.get('.oxd-main-menu-search').click()
   })

   it('Login test with invalid password and password', () => {
      loginPage.enterUsername(data.invalid.username)
      loginPage.enterPassword(data.invalid.password)
      loginPage.clickLogin()
      cy.get('.oxd-main-menu-search').click()
   })

   it('Login without any credentials', () => {
      loginPage.clickLogin()
      cy.get('.oxd-main-menu-search').click()
   })

   it('Click forget Password', () => {
      loginPage.clickForgetPassword()
      cy.contains('Reset Password')
   })

   it.only('Reset Password with Username', () => {
      loginPage.clickForgetPassword()
      loginPage.enterRUsername(data.reset.rusername)
      loginPage.resetPassword()
      cy.contains('Reset Password link sent successfully')
   })

   it('Reset Password without Username', () => {
      loginPage.resetPassword()
      cy.contains('Reset Password link sent successfully')
   })

   it('Verify Orange Inc link', () => {
      loginPage.clickOrangeInc()
   })

   it('Verify LinkedIn link', () => {
      loginPage.clickLinkedIn()
   })

   it('Verify facebook link', () => {
      loginPage.clickFacebook()
   })

   it('Verify twitter link', () => {
      loginPage.clickTwitter()
   })

   it('Verify youtube link', () => {
      loginPage.clickYoutube()
   })
})