/// <reference types="Cypress" />

describe('Reg users sing up', () => {
    context('reg users', () => {

        it('SignUP error massege, check URL', () => {
            cy.get('body').then(($el) => {
                Cypress.dom.isDom($el) // true
            })
            cy.viewport(1700, 1000)
            cy.visit('https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php')
            cy.url()
                .should('be.equal', 'https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php')
            cy.visit('https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php')
            cy.get('body').find('img').should('have.attr', 'src').and('match', /svg/)
            cy.contains('QA Portal Login').should('be.visible', 'QA Portal Login')
            cy.get('input[name="username"]').should('be.visible')
            cy.get('input[name="password"]').should('be.visible')
                .get('input[class="btn btn-success"]').should('be.visible')
                .get('input[class="btn btn-success"]').click().wait(3000)
            cy.contains('Please enter username').should('have.text', 'Please enter username.')
            cy.contains('Please enter your password').should('have.text', 'Please enter your password.')
            cy.get('input[name="username"]').type('test')
            cy.get('input[name="password"]').type('retest')
                .get('input[class="btn btn-success"]').click().wait(2000)
            cy.contains('The password you entered was not valid').should('not.be.visible', 'The password you entered was not valid')

        })



        it("sending the POST request", () => {

            cy.request({
                method: "POST",
                url: "https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php",
                body: "",
                headers: "",
            }).then((response) => {
                expect(response).to.have.property("status").to.equal(200);
                console.log(response);

            });
        });




    })
})