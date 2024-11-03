import HomePage from '../support/pageObjects/homePage';
import SearchPage from '../support/pageObjects/searchPage';
import CartPage from '../support/pageObjects/cartPage';
import CheckoutPage from '../support/pageObjects/checkoutPage';

const homePage = new HomePage();
const searchPage = new SearchPage();
const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();

describe('E-commerce Search and Checkout Flow', () => {
  it('Should search, add to cart, and proceed to checkout', () => {
    homePage.visit();

    // Search for a product
    homePage.searchProduct('Laptop');
    searchPage.selectProduct();

    // Add product to cart and go to checkout
    cartPage.addToCart();
    cartPage.proceedToCheckout();

    // Confirm the order
    checkoutPage.continue();
    checkoutPage.addCart();
    checkoutPage.confirmOrder();

    // Assertions
    cy.url().should('include', 'checkout');
    // cy.get('.order-summary').should('be.visible');
  });
});