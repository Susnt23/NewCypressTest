export class AdminPage {
    user_namea = '.oxd-input:eq(1)'
    employee_name = '.oxd-autocomplete-text-input > input'
    user_role = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text'
    select_role = '.oxd-select-dropdown > :eq(1)'
    status = ':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text'
    selectstatus = '.oxd-select-dropdown > :eq(1)'
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
    job = '.oxd-topbar-body-nav > ul > :nth-child(2)'
    job_titles = ':nth-child(1) > .oxd-topbar-body-nav-tab-link'
    new_job_title = '.oxd-button > .oxd-icon'
    job_title_name = ':nth-child(2) > .oxd-input'
    job_descp = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-textarea'
    upload_job = '.oxd-file-button'
    save_job = '.oxd-button--secondary'
    org = ':nth-child(3) > .oxd-topbar-body-nav-tab-item'
    general_info = ':nth-child(1) > .oxd-topbar-body-nav-tab-link'
    qualifications = ':nth-child(4) > .oxd-topbar-body-nav-tab-item'
    skills = ':nth-child(1) > .oxd-topbar-body-nav-tab-link'
    more = ':nth-child(5) > .oxd-topbar-body-nav-tab-item'
    nationalities = ':nth-child(1) > li > .oxd-topbar-body-nav-tab-link'

    enterUser(usernamea) {
        cy.get(this.user_namea).type(usernamea)
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
        cy.get(this.status).click()
    }

    selectStatus() {
        cy.get(this.selectstatus).click()
    }

    clickSearch() {
        cy.get(this.click_search).click({ force: true })
    }

    clickAdd() {
        cy.get(this.click_add).click()
    }

    newEmpname(empnamea) {
        cy.get(this.employee_name).type(empnamea)
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

    clickJob() {
        cy.get(this.job).click()
    }

    openJobTitles() {
        cy.get(this.job_titles).click()
    }

    addNewJobTitle() {
        cy.get(this.new_job_title).click()
    }

    typeJobName() {
        cy.get(this.job_title_name).type('IT Engineer')
    }

    typeDescp() {
        cy.get(this.job_descp).type('Data Analysis and Reporting')
    }

    uploadJob() {
        cy.get(this.upload_job).attachFile('susnt.jpg')
    }

    saveJob() {
        cy.get(this.save_job).click()
    }

    openOrg() {
        cy.get(this.org).click()
    }

    clickGeneralInfo() {
        cy.get(this.general_info).click()
    }

    openQualifications() {
        cy.get(this.qualifications).click()
    }

    openSkills() {
        cy.get(this.skills).click()
    }

    openMore() {
        cy.get(this.more).click()
    }

    openNationalitites() {
        cy.get(this.nationalities).click()
    }
}