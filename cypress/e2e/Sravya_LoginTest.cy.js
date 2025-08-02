import LoginPage from '../pages/LoginPage';
import SecurePage from '../pages/SecurePage';
import CheckboxPage from '../pages/CheckboxPage';
import DropdownPage from '../pages/DropdownPage';
import ContextMenuPage from '../pages/ContextMenuPage';
import DynamicPage from '../pages/DynamicPage';

//Assignment 1: Login Page
describe('Login Tests Using Page Object and Fixtures', () => {
  beforeEach(function () {
    cy.fixture('users').as('users'); 
    LoginPage.visit();
  });

  it('logs in with valid credentials', function () {
    const { validUser } = this.users;
    LoginPage.enterUsername(validUser.username);
    LoginPage.enterPassword(validUser.password);
    LoginPage.clickLogin();
    cy.get('#flash').should('be.visible').and('include.text', 'You logged into a secure area!');
  });

  it('shows error with invalid credentials', function () {
    const { invalidUser } = this.users;
    LoginPage.enterUsername(invalidUser.username);
    LoginPage.enterPassword(invalidUser.password);
    LoginPage.clickLogin();
    cy.get('#flash').should('be.visible').and('contain.text', 'Your username is invalid!');
  });
//Assignment 2: Secure Page
  it('LoginForm_Happypath - login and logout flow', function () {
    SecurePage.loginAndLogout(this.users.validUser.username, this.users.validUser.password);
  });
});

//Assignment 3: Checkboxes Interaction
describe('Checkboxes Interaction with Pre/Post Validation', () => {
  beforeEach(() => {
    cy.visit('/checkboxes');
  });

  it('validates initial state, performs actions, then validates final state', () => {
    CheckboxPage.validateCheckboxState('#checkbox1', 'unchecked');
    CheckboxPage.validateCheckboxState('#checkbox2', 'checked');

    CheckboxPage.checkFirstBox();
    CheckboxPage.uncheckSecondBox();

    CheckboxPage.validateCheckboxState('#checkbox1', 'checked');
    CheckboxPage.validateCheckboxState('#checkbox2', 'unchecked');
  });
});

//Assignment 4: Dropdown Handling
describe('Dropdown Handling', () => {
  beforeEach(() => {
    cy.visit('/dropdown');
  });

  it('selects Option 1 and validates', () => {
    DropdownPage.selectOption('1');
    DropdownPage.getSelectedOption().should('contain.text', 'Option 1');
  });

  it('selects Option 2 and validates', () => {
    DropdownPage.selectOption('2');
    DropdownPage.getSelectedOption().should('contain.text', 'Option 2');
  });
});


//Assignment 5: Context Menu

describe('Context Menu Alert Handling', () => {
  beforeEach(() => {
    cy.visit('/context-menu');
  });

  it('shows alert on right-click and validates message', () => {
    ContextMenuPage.handleAlert('You selected a context menu');
    ContextMenuPage.rightClickBox();
  });
});

//Assignment 9: Dynamic Content


describe('Dynamic Content Validation', () => {
  beforeEach(() => {
    cy.visit('/dynamic-content');
  });

  it('refresh and assert content changes', () => {
    DynamicPage.getTextBlocks().then(initialContent => {
      cy.reload();
      DynamicPage.getTextBlocks().then(refreshedContent => {
        DynamicPage.compareContent(initialContent, refreshedContent);
      });
    });
  });
})
