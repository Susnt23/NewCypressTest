export class Orghrmpage {
    admin_prof = '.oxd-main-menu-item:eq(0)'
    pim_info = '.oxd-main-menu-item:eq(1)'
    leave_list = '.oxd-main-menu-item:eq(2)'
    time_sheet = '.oxd-main-menu-item:eq(3)'
    recruitment = '.oxd-main-menu-item:eq(4)'
    my_info = '.oxd-main-menu-item:eq(5)'
    performance = '.oxd-main-menu-item:eq(6)'
    dashboard = '.oxd-main-menu-item:eq(7)'
    directory = '.oxd-main-menu-item:eq(8)'
    maintenance = '.oxd-main-menu-item:eq(9)'
    buzz = '.oxd-main-menu-item:eq(10)'

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
        cy.get(this.timesheet).click()
    }

    clickRecruitment() {
        cy.get(this.recruitment).click()
    }

    clickMyInfo() {
        cy.get(this.my_info).click()
    }

    clickPerformance() {
        cy.get(this.performance).click()
    }

    clickDashboard() {
        cy.get(this.dashboard).click()
    }

    clickDirectory() {
        cy.get(this.directory).click()
    }

    clickMaintain() {
        cy.get(this.maintenance).click()
    }

    clickBuzz() {
        cy.get(this.buzz).click()
    }
}