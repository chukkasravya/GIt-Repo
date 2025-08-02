class DynamicPage {
  contentSelector = '.col-md-10';

  getTextBlocks() {
    return cy.get(this.contentSelector).then($elements => {
      const texts = [];
      $elements.toArray().forEach(el => {
        texts.push(el.innerText.trim());
      });
      return texts;
    });
  }

  compareContent(oldContent, newContent) {
    expect(newContent).to.not.deep.equal(oldContent);
  }
}

export default new DynamicPage();
