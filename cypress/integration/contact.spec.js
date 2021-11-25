describe('Contact', () => {
  it('can submit a valid form, header &  response from  API call)', () => {
    cy.visit('http://localhost:3000/contact');

    cy.get('[data-cy="contact-subject"]')
      .should('be.visible')
      .type('Subject')
      .click();
    cy.get('[data-cy="contact-fullname"]')
      .should('be.visible')
      .type('Full Name')
      .click();
    cy.get('[data-cy="contact-email"]')
      .should('be.visible')
      .type('Email address')
      .click();
    cy.get('[data-cy="contact-textarea"]')
      .should('be.visible')
      .type('Enter you message  here')
      .click();
    cy.get('[data-cy="contact-button"]').should('be.visible').click();
    cy.contains('Contact Us');
    cy.contains('Submit').click();
  });
});
