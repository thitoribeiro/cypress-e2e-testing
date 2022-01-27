describe('Feedback Test', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.contains('Feedback').click()
    })

    it('Should load feedback form', () => {
        cy.get('form').should('be.visible')
    })

    it('Should fill in feedback form', () => {
        cy.get('#name').type('Name')
        cy.get('#email').type('email@email.com')
        cy.get('#subject').type('Subject for email')
        cy.get('#comment').type('Email message')
    })

    it('Should submit feedback form', () => {
        cy.get('.btn-signin').click()
    })

    it('Should display feedback message', () => {
        cy.get('#feedback-title').contains('Feedback')
    })
})