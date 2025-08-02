class DropdownPage {
  dropdown = '#dropdown';

  selectOption(value) {
    cy.get(this.dropdown).select(value).should('have.value', value);
  }

  getSelectedOption() {
    return cy.get(this.dropdown).find(':selected');
  }
}

export default new DropdownPage();
