describe('Dropdown functionality', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080');
  });

  it('should toggle dropdown on click', () => {
    cy.get('#dropdown-button-1').click();
    cy.get('#dropdown-content-1').should('be.visible');
    cy.get('#dropdown-button-1').click();
    cy.get('#dropdown-content-1').should('not.be.visible');
  });
});