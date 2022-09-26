export class Orghrmpage {


    admin_prof = '.oxd-main-menu-item:eq(0)'
    pim_info = '.oxd-main-menu-item:eq(1)'
    leave_list = '.oxd-main-menu-item:eq(2)'
    time_sheet = '.oxd-main-menu-item:eq(3)'
    recruit_ment = '.oxd-main-menu-item:eq(4)'
    my_info = '.oxd-main-menu-item:eq(5)'
    perfor_mance = '.oxd-main-menu-item:eq(6)'
    dash_board = '.oxd-main-menu-item:eq(7)'
    direc_tory = '.oxd-main-menu-item:eq(8)'
    mainte_nance = '.oxd-main-menu-item:eq(9)'
    bu_zz = '.oxd-main-menu-item:eq(10)'

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
    clickRecruitment() {

        cy.get(this.recruit_ment).click()

    }
    clickMyInfo() {

        cy.get(this.my_info).click()

    }
    clickPerformance() {

        cy.get(this.perfor_mance).click()

    }
    clickDashboard() {

        cy.get(this.dash_board).click()

    }
    clickDirectory() {

        cy.get(this.direc_tory).click()

    }
    clickMaintain() {

        cy.get(this.mainte_nance).click()

    }
    clickBuzz() {

        cy.get(this.bu_zz).click()

    }

}