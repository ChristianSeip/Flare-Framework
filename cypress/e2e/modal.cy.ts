describe('Modal functionality', () => {
	beforeEach(() => {
		cy.visit('http://localhost:8080');
	});

	it('should open and close modal', () => {
		cy.get('#modal-button-1').click();
		cy.get('#modal-content-1').should('be.visible');
		cy.get('#modal-close-1').click();
		cy.get('#modal-content-1').should('not.be.visible');
	});
});