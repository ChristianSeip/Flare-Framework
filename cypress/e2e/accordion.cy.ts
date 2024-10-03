describe('Accordion functionality', () => {
	beforeEach(() => {
		cy.visit('http://localhost:8080');
	});

	it('should toggle accordion on click', () => {
		cy.get('#accordion-button-1').click();
		cy.get('#accordion-content-1').should('be.visible');
		cy.get('#accordion-button-1').click();
		cy.get('#accordion-content-1').should('not.be.visible');
	});
});