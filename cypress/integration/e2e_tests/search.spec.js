describe('Searchbox Test', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Should type into searchbox and submit pressing enter', () => {
        cy.get('#searchTerm').type('some text {enter}')
    })

    it('Should show search results page', () => {
        cy.get('h2').contains('Search Results:')
    })
})