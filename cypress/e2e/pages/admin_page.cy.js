export class AdminPage {


    user_name = '.oxd-input:eq(1)'
    user_role = '.oxd-select-text-input'
    select_role = '.oxd-select-dropdown > :nth-child(2) > span'
    employee_name = '.oxd-autocomplete-text-input > input'
    sear_ch = '.oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space'



    enterUser(username) {

        cy.get(this.user_name).type(username)


    }

    enterUserRole() {

        cy.get(this.user_role).select('Admin')

    }

    enterEmpName(empname) {

        cy.get(this.employee_name).type(empname)

    }

    selectUserRole() {

        cy.get(this.select_role).click()
    }




}