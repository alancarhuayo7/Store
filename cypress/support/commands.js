Cypress.Commands.add('login', (username, password) => {
    cy.visit('/');
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-button"]').click();
  });

  Cypress.Commands.add('buy', (productsNumber) => {
    cy.log('Valor inicial', productsNumber);
    
    for (let i = 1; i <= productsNumber; i++) {
      cy.log('Ingresa al bucle con i =', i);
      
      cy.get('[data-test="inventory-list"] > :nth-child(' + i + ')')
        .find('.btn.btn_primary.btn_small.btn_inventory')
        .click();    
  
      cy.log('Valor final', i);
    }
    cy.screenshot("Buy products");
  });

  Cypress.Commands.add('viewCar', () => {
    
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.screenshot('View Cart products');
  });

  Cypress.Commands.add('checkoutProduct', (firstName,lastName, codePostal) => {
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type(firstName);
    cy.get('[data-test="lastName"]').type(lastName);
    cy.get('[data-test="postalCode"]').type(codePostal);
    cy.screenshot('Checkout client information');
    cy.get('[data-test="continue"]').click();
    cy.screenshot('Checkout shopping');
    cy.get('[data-test="finish"]').click();

    cy.get('[data-test="checkout-complete-container"]')
    .should('contain', 'Thank you for your order!');
    cy.screenshot('Finally shopping');

  });