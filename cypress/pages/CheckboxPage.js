class CheckboxPage {
  firstCheckbox = '#checkbox1';
  secondCheckbox = '#checkbox2';


  validateCheckboxState(selector, expectedState) {
    if (expectedState === 'checked') {
      cy.get(selector).should('be.checked');
    } else if (expectedState === 'unchecked') {
      cy.get(selector).should('not.be.checked');
    } else {
      throw new Error('Expected state must be "checked" or "unchecked"');
    }
  }

  checkFirstBox() {
    cy.get(this.firstCheckbox).check();
  }


  uncheckSecondBox() {
    cy.get(this.secondCheckbox).uncheck();
  }
}

export default new CheckboxPage();
