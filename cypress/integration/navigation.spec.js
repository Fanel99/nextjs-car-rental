describe('Header', () => {
  it('Visit header and check links(Login & Signup)', () => {
    cy.visit('http://localhost:3000/');

    cy.get('[data-cy="header-login-link"]').should('be.visible').click();
    cy.get('[data-cy="header-register-link"]').should('be.visible').click();
    cy.contains('Login');
    cy.contains('Register');
    cy.get('[data-cy="signup-email"]').type('E-mail');
    cy.get('[data-cy="signup-username"]').type('Username');
    cy.get('[data-cy="signup-password"]').type('Enter your password');
    cy.get('[data-cy="submit-button"]').type('submit');
    cy.get('[data-cy="search"]').type('Search...');
  });
});
