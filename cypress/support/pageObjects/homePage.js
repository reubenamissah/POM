class HomePage {
    visit() {
      cy.visit('/');
    }
    searchProduct(productName) {
      cy.get('#entry_217822 > .search-wrapper > form > #search > .search-input-group > .search-input > .flex-fill > input').type(`${productName}{enter}`);
    }
  }
  export default HomePage;