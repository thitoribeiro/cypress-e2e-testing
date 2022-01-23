describe('Recovering the password test', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Should click on the signin button', () => {
        cy.get('#signin_button').click()
    })

    it('Should click on the forgotten password', () => {
        cy.get('.offset3 > a').click()
    })

    it('Should fill email form', () => {
        cy.get('#user_email').type('email@email.com')
    })

    it('Should submit the form', () => {
        cy.contains('Send Password').click()
    })
})