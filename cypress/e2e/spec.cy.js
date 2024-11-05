describe('Compra de productos', () => {



  it('Autenticación de usuario ', () => {
    cy.fixture('navigate.json').then((locator) => {
      cy.login(locator.username, locator.password);
      cy.screenshot();
    })
  })

  it.only('Compra de productos', () => {
    cy.fixture('navigate.json').then((locator) => {
      cy.login(locator.username, locator.password);

      cy.fixture('buyInformation.json').then((locatorInformation) => {
        cy.buy(locatorInformation.products);
        cy.viewCar();

        cy.checkoutProduct(locatorInformation.clientFirstName
          , locatorInformation.clientLastName
          , locatorInformation.clientPostalCode);

        
        
      })
    })
  })

})