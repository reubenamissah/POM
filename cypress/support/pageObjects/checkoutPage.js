class CheckoutPage {
    continue() {
        cy.get('.buttons > .btn').click();
      }

    addCart() {
        cy.get('#entry_217825 svg').click();
      }
    
    confirmOrder() {
      cy.get('#entry_217851 > .icon-right').click();
    }
  }
  export default CheckoutPage;