//For Login
describe('example social media client', () => {
  it('correct login', () => {
    cy.visit('https://samail01.github.io/workflow-ca-samail/');
    cy.wait(1000);
    cy.get(
      '#registerForm > div.modal-footer > button.btn.btn-outline-success',
    ).click();
    cy.wait(1000);
    cy.get('#loginEmail').type(Cypress.env('USER_EMAIL'));
    cy.get('#loginPassword').type(Cypress.env('USER_PASSWORD'));

    cy.get('.btn-success').contains('Login').click();
    cy.url().should('include', '?view=profile&name=Samail');
    cy.wait(3000);

    //for Logout
    cy.get(
      'body > header > div > div > div > button.btn.btn-outline-warning.me-2',
    )
      .contains('Logout')
      .click();
    cy.wait(1000);

    //For wrong Login
    cy.get(
      '#registerForm > div.modal-footer > button.btn.btn-outline-success',
    ).click();
    cy.wait(1000);

    cy.get('#loginEmail').type('wrong@stud.noroff.no');
    cy.get('#loginPassword').type('wrongpass123');
    cy.get('.btn-success').contains('Login').click();
  });
});
