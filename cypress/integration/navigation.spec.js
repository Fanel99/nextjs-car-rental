describe('Header', () => {
  it('Visit header and check links(Login & Signup)', () => {
    cy.visit('http://localhost:3000/');

    cy.get('[data-cy="header-login-link"]').should('be.visible').click();
    cy.get('[data-cy="header-register-link"]').should('be.visible').click();
    cy.contains('Login');
    cy.contains('Register');
    cy.wait(1000);
    cy.get('[data-cy="signup-email"]').should('be.visible');
    cy.get('[data-cy="signup-username"]').should('be.visible');
    cy.get('[data-cy="signup-password"]').should('be.visible');
    cy.get('[data-cy="submit-button"]').should('be.visible');
    cy.get('[data-cy="search"]').should('be.visible');
  });
});
