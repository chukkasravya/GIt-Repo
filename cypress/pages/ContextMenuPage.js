class ContextMenuPage {
  boxSelector = '#hot-spot';

  rightClickBox() {
    cy.get(this.boxSelector).rightclick();
  }

  handleAlert(expectedText) {
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.eq(expectedText);
    });
  }
}

export default new ContextMenuPage();
