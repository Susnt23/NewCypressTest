export class Profile {
     prof = '.oxd-userdropdown-tab'
     about = ':nth-child(1) > .oxd-userdropdown-link'
     support = ':nth-child(2) > .oxd-userdropdown-link'
     Change_pws = ':nth-child(3) > .oxd-userdropdown-link'
     Logout = ':nth-child(4) > .oxd-userdropdown-link'
     search = '.oxd-main-menu-search'

     clickProfile() {
          cy.get(this.prof).click()
     }
     clickAbout() {
          cy.get(this.about).click()
     }
     clickSupport() {
          cy.get(this.support).click()
     }
     clickChangePws() {
          cy.get(this.Change_pws).click()
     }
     clickLogout() {
          cy.get(this.Logout).click()
     }
     searchModule(){
          cy.get(this.search).type('Main')
     }  
}      