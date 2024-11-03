class CartPage {
    addToCart() {
      cy.get('#entry_217825 > .cart > .cart-icon > .badge').click();
    }
    proceedToCheckout() {
      cy.get('#entry_217851 > .icon-right').click();
    }
  }
  export default CartPage;