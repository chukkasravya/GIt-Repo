// describe('Custom_Cypress', () => {
//   it.only('Custom_Cypress', () => {
//     cy.visit('https://practice.expandtesting.com/login')
//     cy.fillInput("#username","practice")
//     cy.fillInput("#password","SuperSecretPassword!");
//     cy.get('#login > button').click();
 
//   })
          
// })

describe('Custom_Cypress', () => {
  it.only('Custom_Cypress', () => {
    cy.login('practice', 'SuperSecretPassword!');
  })
})

describe('Checkbox Interaction', () => {
  
  it('Checkbox Interaction', () => {
    cy.visit('https://practice.expandtesting.com/login');

    cy.get('#username').typeText('practice');
    cy.get('input[name="password"]').typeText('SuperSecretPassword!');
    cy.contains('button', 'Login').click();

    cy.contains('a','Home').click();

    cy.get('input[type="text"]').typeText('checkbox');
    cy.get('#search-button').click();

    cy.contains('a','Check Boxes').click();

    cy.get('#checkbox1').click();
    cy.get('#checkbox1').should('be.checked');

    cy.get('#checkbox1').click();
    cy.get('#checkbox1').should('not.be.checked');

    cy.get('#checkbox2').click();
    cy.get('#checkbox2').should('not.be.checked');

    // cy.contains('Logout').click();
  })
})

describe('Part 2: Use Commands in Test', () => {
  it.only('Logs in and performs checkbox interaction using custom commands', () => {
    cy.login('practice', 'SuperSecretPassword!');
    cy.contains('a', 'Home').click();
    cy.get('input[type="text"]').typeText('checkbox');
    cy.get('#search-button').click();
    cy.contains('a', 'Check Boxes').click();
    cy.get('#checkbox1').click().should('be.checked');
    cy.get('#checkbox1').click().should('not.be.checked');
    cy.get('#checkbox2').click().should('not.be.checked');
  });
});
