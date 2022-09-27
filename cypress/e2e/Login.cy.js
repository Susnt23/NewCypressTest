
import { LoginPage } from "./pages/login_page.cy";

const loginPage = new LoginPage()

beforeEach(function () {
   cy.visit('https://opensource-demo.orangehrmlive.com')
})

describe('Login Page Tests', () => {

   it('Login test with valid credntials', () => {
      loginPage.enterUsername('Admin')
      loginPage.enterPassword('admin123')
      loginPage.clickLogin()
      cy.get('.oxd-main-menu-search').click()
   })
   
   it('Login test with invalid username', () => {
      loginPage.enterUsername('admin1')
      loginPage.enterPassword('Admin123')
      loginPage.clickLogin()
      cy.get('.oxd-main-menu-search').click()
   })

   it('Login test with invalid password', () => {
      loginPage.enterUsername('admin')
      loginPage.enterPassword('Admin12345')
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

   it('Reset Password with Username', () => {
      loginPage.clickForgetPassword()
      loginPage.enterRUsername('admin')
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