export class LoginPage {
     user_name = 'input[name=username]'
     pass_word = 'input[name=password]'
     log_in = '.oxd-button'
     forget_password = '.orangehrm-login-forgot > .oxd-text'
     reset_username = '.oxd-input'
     reset_password = '.oxd-button--secondary'
     orange_inc = ':nth-child(2) > a'
     linkedin = '[href="https://www.linkedin.com/company/orangehrm/mycompany/"] > .oxd-icon'
     facebook = '[href="https://www.facebook.com/OrangeHRM/"] > .oxd-icon'
     twitter = '[href="https://twitter.com/orangehrm?lang=en"] > .oxd-icon'
     youtube = '[href="https://www.youtube.com/c/OrangeHRMInc"] > .oxd-icon > g > .st0'

     enterUsername(username) {
          cy.get(this.user_name).type(username)
     }

     enterPassword(password) {
          cy.get(this.pass_word).type(password)
     }

     clickLogin() {
          cy.get(this.log_in).click()
     }

     clickForgetPassword() {
          cy.get(this.forget_password).click()
     }

     resetPassword() {
          cy.get(this.reset_password).click()
     }

     enterRUsername(rusername) {
          cy.get(this.reset_password).type(rusername)
     }

     clickOrangeInc() {
          cy.get(this.orangeinc).click()
     }

     clickLinkedIn() {
          cy.get(this.linkedin).click()
     }

     clickFacebook() {
          cy.get(this.facebook).click()
     }

     clickTwitter() {
          cy.get(this.twitter).click()
     }

     clickYoutube() {
          cy.get(this.youtube).click()
     }
}


