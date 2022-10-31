/// < reference types = "Cypress"/>

it('File Upload', function () {
    cy.visit('https://trytestingthis.netlify.app')
    cy.get('#myfile').attachFile('susnt.jpg')
})
