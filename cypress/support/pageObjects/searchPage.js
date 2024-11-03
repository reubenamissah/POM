class SearchPage {
    selectProduct() {
      cy.get('#entry_217822 .flex-fill > input').first().click();
    }
  }
  export default SearchPage;