class SecurePage {
    UserNameLoc='input#username';
    PassWordLoc='input#password';;
    LoginButtonLoc='button[type="submit"]';
  loginAndLogout(username, password) {
    cy.visit('/login');
    cy.get(this.UserNameLoc).clear().type(username);
    cy.get(this.PassWordLoc).clear().type(password);
    cy.get(this.LoginButtonLoc).click();
    cy.url().should('include', '/secure');
    cy.get('#flash').should('be.visible').and('include.text', 'You logged into a secure area!');
    cy.contains('Logout').should('be.visible').click();
    cy.url().should('include', '/login');
    cy.get('#flash').should('be.visible').and('include.text', 'You logged out of the secure area!');
  }
}

export default new SecurePage();
