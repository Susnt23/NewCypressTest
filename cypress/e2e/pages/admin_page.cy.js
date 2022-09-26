export class AdminPage {

    user_name = '.oxd-input:eq(1)'
    employee_name = '.oxd-autocomplete-text-input > input'
    user_role = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text'
    select_role = '.oxd-select-dropdown > :eq(1)'
    stat_us = ':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text'
    select_status = '.oxd-select-dropdown > :eq(1)'
    click_search = 'button[type=submit]'
    click_add = '.orangehrm-header-container > .oxd-button'
    new_employee = '.oxd-autocomplete-text-input > input'
    new_username = ':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input'
    new_password = '.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input'
    confirm_password = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    new_userole = '.oxd-select-text-input:eq(0)'
    select_newrole = '.oxd-select-dropdown > :eq(1)'
    new_status = '.oxd-select-text-input:eq(1)'
    select_status = '.oxd-select-dropdown > :eq(2)'
    save_button = '.oxd-button--secondary'
    cancel_button = '.oxd-button--ghost'

    enterUser(username) {

        cy.get(this.user_name).type(username)

    }

    enterEmpName(empname) {

        cy.get(this.employee_name).type(empname)

    }

    enterUserRole() {

        cy.get(this.user_role).click()

    }

    selectUserRole() {

        cy.get(this.select_role).click()

    }

    enterStatus() {

        cy.get(this.stat_us).click()

    }

    selectStatus() {

        cy.get(this.select_status).click()
    }

    clickSearch() {

        cy.get(this.click_search).click({ force: true })

    }
    clickAdd() {

        cy.get(this.click_add).click()

    }
    newEmpname(empname) {

        cy.get(this.employee_name).type(empname)

    }

    newEmpUsername(empuser) {

        cy.get(this.new_username).type(empuser)
    }

    newPassword(newpass) {

        cy.get(this.new_password).type(newpass)

    }
    confirmPassword(cpass) {

        cy.get(this.confirm_password).type(cpass)

    }
    enterNewUserRole() {

        cy.get(this.new_userole).click()

    }

    selectNewUserRole() {

        cy.get(this.select_role).click()

    }

    enterNewStatus() {

        cy.get(this.new_status).click()

    }

    selectNewStatus() {

        cy.get(this.select_status).click()
    }

    clickSave() {

        cy.get(this.save_button).click()
    }

    clickCancel() {

        cy.get(this.cancel_button).click()
    }

}