
export class Orghrmpage {


    admin_prof = ':nth-child(1) > .oxd-main-menu-item'
    pim_info = ':nth-child(2) > .oxd-main-menu-item'
    leave_list = ':nth-child(3) > .oxd-main-menu-item'
    time_sheet = ':nth-child(4) > .oxd-main-menu-item'


    clickAdmin() {

        cy.get(this.admin_prof).click()


    }
    clickPIM() {

        cy.get(this.pim_info).click()


    }
    clickLeave() {

        cy.get(this.leave_list).click()


    }
    clickTime() {

        cy.get(this.time_sheet).click()


    }










}