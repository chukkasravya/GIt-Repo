describe('Practice_Cypress', () => {
  it.only('Practice', () => {
    cy.visit('https://practice.expandtesting.com/login')
    cy.get('#username').type('practice');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('#login > button').click();
    cy.get('#core > div > div > a > i').click();
  })
          
})

