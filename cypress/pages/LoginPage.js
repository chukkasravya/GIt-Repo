class LoginPage {
    UserNameLoc='input#username';
    PassWordLoc='input#password';;
    LoginButtonLoc='button[type="submit"]';
  visit() {
    cy.visit('/login'); 
  }

  enterUsername(username) {
    cy.get(this.UserNameLoc).clear().type(username);
  }

  enterPassword(password) {
    cy.get(this.PassWordLoc).clear().type(password); 
  }

  clickLogin() {
    cy.get(this.LoginButtonLoc).click();
  }
}

export default new LoginPage();
