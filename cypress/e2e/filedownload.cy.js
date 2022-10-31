/// <reference types = "Cypress" />

it('File Download Test', function () {
    cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg', 'mydownloads', 'example.jpg')
})