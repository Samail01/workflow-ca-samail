require('dotenv/config');

//Login first
const email = Cypress.env('USER_EMAIL');
const password = Cypress.env('USER_PASSWORD');

describe('example social media client', () => {
  it('correct login', () => {
    cy.visit('https://samail01.github.io/workflow-ca-samail/');
    cy.wait(1000);
    cy.get(
      '#registerForm > div.modal-footer > button.btn.btn-outline-success',
    ).click();
    cy.wait(1000);
    cy.get('#loginEmail').type(`${email}`);
    cy.wait(1000);
    cy.get('#loginPassword').type(`${password}{enter}`);
    cy.wait(2000);

    //for Logout
    cy.get(
      'body > header > div > div > div > button.btn.btn-outline-warning.me-2',
    ).click();
    cy.wait(1000);
    cy.get('#registerForm .modal-header .modal-title').should(
      'have.text',
      'Create Profile',
    );
  });
});
