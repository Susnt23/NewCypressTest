
export class LoginPage {

     user_name = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
     pass_word = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
     log_in = '.oxd-button'
     forget_password = '.orangehrm-login-forgot > .oxd-text'
     reset_username = '.oxd-input'
     reset_password = '.oxd-button--secondary'
     orange_inc = ':nth-child(2) > a'
     linked_in = '[href="https://www.linkedin.com/company/orangehrm/mycompany/"] > .oxd-icon'
     face_book = '[href="https://www.facebook.com/OrangeHRM/"] > .oxd-icon'
     twit_ter = '[href="https://twitter.com/orangehrm?lang=en"] > .oxd-icon'
     you_tube = '[href="https://www.youtube.com/c/OrangeHRMInc"] > .oxd-icon > g > .st0'


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

          cy.get(this.orange_inc).click()
     }

     clickLinkedIn() {

          cy.get(this.linked_in).click()
     }
     clickFacebook() {

          cy.get(this.face_book).click()
     }
     clickTwitter() {

          cy.get(this.twit_ter).click()
     }
     clickYoutube() {

          cy.get(this.you_tube).click()
     }


}


