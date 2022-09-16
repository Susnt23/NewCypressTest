
export class LoginPage {

     user_name = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
     pass_word = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
     log_in = '.oxd-button'
     forget_password = '.orangehrm-login-forgot > .oxd-text'
     resetpsw_username = '.oxd-input'
     reset_password = '.oxd-button--secondary'
     orange_inc = ':nth-child(2) > a'


     enterUsername(username) {

          cy.get(this.user_name).type(username)

     }


     enterPassword(password) {

          cy.get(this.pass_word).type(password)

     }

     clickLogin() {

          cy.get(this.log_in).click()


     }

     clickForgetPassword(){

          cy.get(this.forget_password).click()

     }

     ResetPassword(){

          cy.get(this.reset_password).click()
     }

     enterRUsername(rusername){

          cy.get(this.resetpsw_username).type(rusername) 

     }

     clickOrangeInc(){

          cy.get(this.orange_inc).click()
     }



}


