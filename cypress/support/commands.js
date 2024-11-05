Cypress.Commands.add('login', (username, password) => {
    cy.visit('/');
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-button"]').click();
  });

  Cypress.Commands.add('buy', (productsNumber) => {
    
    i =1;

    while (i<=productsNumber)
    {
      cy.get(':nth-child('+i+') > [data-test="inventory-item-description"]')
      .find('[data-test="add-to-cart-sauce-labs-backpack"]')
      .click();
      i=i+1;    
    }



  });