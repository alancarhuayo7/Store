describe('Pruebas E2E', () => {

  it('Autenticación de usuario ', () => {
    cy.fixture('navigate.json').then((locator) => {
      cy.login(locator.username, locator.password);
  })
  })

  it.only('Compra de productos ', () => {
    cy.fixture('navigate.json').then((locator) => {
      cy.login(locator.username, locator.password);
      cy.fixture('buyProduct.json').then((locatorProduct) => {
        cy.login(locatorProduct.productsNumber);

      })
  })
  })

})