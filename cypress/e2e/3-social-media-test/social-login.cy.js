//For Login
require('dotenv/config');
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
    cy.get('#loginPassword').type(`${password}`);

    cy.get('.btn-success').contains('Login').click();
    cy.wait(3000);
  });
});

/*  //For wrong Login
    cy.get(
      '#registerForm > div.modal-footer > button.btn.btn-outline-success',
    ).click();
    cy.wait(1000);

    cy.get('#loginEmail').type('wrong@stud.noroff.no');
    cy.get('#loginPassword').type('wrongpass123');
    cy.get('.btn-success').contains('Login').click(); */
