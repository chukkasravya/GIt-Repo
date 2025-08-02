// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Cypress.Commands.add('fillInput', (locator, value) => {
//   cy.get(locator).clear().type(value);
// });

Cypress.Commands.add('login', (username, password) => {
  cy.visit('https://practice.expandtesting.com/login');
  cy.get('#username').clear().type(username);
  cy.get('#password').clear().type(password);
  cy.get('#login > button').click();
});

Cypress.Commands.add('typeText', { prevSubject: 'element' }, (subject, text) => {
  cy.wrap(subject).type(text);
});

Cypress.Commands.add('fillInput', (selector, text) => {
    cy.get(selector).clear().type(text);
});