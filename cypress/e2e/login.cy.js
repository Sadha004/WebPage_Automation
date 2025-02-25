describe('ts_landing_page', () => {

  // Handle uncaught exceptions to prevent test failures
  Cypress.on("uncaught:exception", (err, runnable) => {
    console.log("Ignoring error:", err.message);
    return false; // Prevent Cypress from failing the test
  });

  it('verifies whether the landing page is visible and the profile button is clickable', () => {
    cy.visit('https://staging.vantr.io/');
    cy.get('body', { timeout: 10000 }).should('be.visible');
    cy.get('[href="/my-profile"] > .ant-avatar > .anticon > svg', { timeout: 5000 })
      .should('be.visible')
      .click();
    cy.url().should('include', '/my-profile');
    cy.get('body').should('be.visible');
  });

  it('navigates to ":nth-child(1) > .sc-fyrocj" after profile page loads', () => {
    cy.visit('https://staging.vantr.io/');
    cy.get('body', { timeout: 10000 }).should('be.visible');
    cy.get('[href="/my-profile"] > .ant-avatar > .anticon > svg', { timeout: 5000 })
      .should('be.visible')
      .click();
    cy.url().should('include', '/my-profile');
    cy.get('body', { timeout: 10000 }).should('be.visible');
    cy.get(':nth-child(1) > .sc-fyrocj', { timeout: 50000 })
      .should('be.visible')
      .click();
  });

  it('fills the form fields and submits the form', () => {
    cy.visit('https://staging.vantr.io/');
    cy.get('body', { timeout: 10000 }).should('be.visible');
    cy.get('[href="/my-profile"] > .ant-avatar > .anticon > svg', { timeout: 5000 })
      .should('be.visible')
      .click();
    cy.url().should('include', '/my-profile');
    cy.get('body', { timeout: 10000 }).should('be.visible');
    cy.get(':nth-child(1) > .sc-fyrocj', { timeout: 50000 })
      .should('be.visible')
      .click();
    cy.get('form', { timeout: 10000 }).should('exist');
    cy.wait(2000);
    cy.get(':nth-child(1) > .sc-iqVWFU', { timeout: 10000 })
      .should('exist')
      .should('be.visible')
      .type('Jude', { force: true });
    cy.get(':nth-child(2) > .sc-iqVWFU', { timeout: 10000 })
      .should('exist')
      .should('be.visible')
      .type('Iyadurai', { force: true });
    cy.get(':nth-child(3) > .sc-iqVWFU', { timeout: 10000 })
      .should('exist')
      .should('be.visible')
      .type('2215013@nec.edu.in', { force: true });
    cy.get(':nth-child(4) > .sc-iqVWFU', { timeout: 10000 })
      .should('exist')
      .should('be.visible')
      .type('SecurePass@123', { force: true });
    cy.get('.sc-bUbRBg', { timeout: 5000 })
      .should('exist')
      .should('be.visible')
      .click();
    cy.get('.sc-fIosxK', { timeout: 5000 })
      .should('exist')
      .should('be.visible')
      .click();
    cy.url().should('include', '/my-profile');
  });

  it('performs a correct login', () => {
    cy.visit('https://staging.vantr.io/');
    cy.get('body', { timeout: 10000 }).should('be.visible');
    cy.get('[href="/my-profile"] > .ant-avatar > .anticon > svg', { timeout: 5000 })
      .should('be.visible')
      .click();
    cy.url().should('include', '/my-profile');
    cy.get('body').should('be.visible');
    cy.get(':nth-child(1) > .sc-iqVWFU', { timeout: 10000 })
      .should('exist')
      .should('be.visible')
      .type('sadha2145@gmail.com', { force: true });
    cy.get(':nth-child(2) > .sc-iqVWFU', { timeout: 10000 })
      .should('exist')
      .should('be.visible')
      .type('SecurePass@123', { force: true });
    cy.get('.sc-bUbRBg', { timeout: 5000 })
      .should('exist')
      .should('be.visible')
      .click();
    cy.get('.sc-fIosxK', { timeout: 5000 })
      .should('exist')
      .should('be.visible')
      .click();
      cy.get('[data-testid="RNE__Image__children__container"]',{timeout:10000}).should("be.visible");
  });

  it('resets the password and navigates to the login page', () => {
    cy.visit('https://staging.vantr.io/');
  
    cy.get('body', { timeout: 10000 }).should('be.visible');
  
    cy.get('[href="/my-profile"] > .ant-avatar > .anticon > svg', { timeout: 5000 })
      .should('be.visible')
      .click();
  
    cy.url().should('include', '/my-profile');
  
    cy.get('body', { timeout: 10000 }).should('be.visible');
  
    // Click on "Reset Password" link
    cy.get(':nth-child(2) > .sc-fyrocj', { timeout: 5000 })
      .should('be.visible')
      .click();
  
    // Enter email for password reset
    cy.get('.sc-iqVWFU', { timeout: 10000 })
      .should('exist')
      .should('be.visible')
      .type('sadha2145@gmail.com', { force: true });
  
    // Click the reset button
    cy.get('.sc-fIosxK', { timeout: 50000 })
      .should('exist')
      .should('be.visible')
      .click();
  
    // Wait for redirection to the login page
    cy.wait(10000);
  
    // Ensure the login page is visible
    cy.get('.sc-gUQvok').should('be.visible');
  
    // Now enter credentials on the login page
    cy.get(':nth-child(1) > .sc-iqVWFU', { timeout: 10000 })
      .should('exist')
      .should('be.visible')
      .type('123456', { force: true });
  
    cy.get(':nth-child(2) > .sc-iqVWFU')
      .should('exist')
      .should('be.visible')
      .type('Sadha004*', { force: true });
  
    // Click the login button
    cy.get('.sc-gjNHFA', { timeout: 5000 })
      .should('exist')
      .should('be.visible')
      .click();
  });
  
  
  it('Verify the Edit Profile Option in the Website', () => {
    cy.visit('https://staging.vantr.io/');
    cy.get('body', { timeout: 10000 }).should('be.visible');
    cy.get('[href="/my-profile"] > .ant-avatar > .anticon > svg', { timeout: 5000 })
      .should('be.visible')
      .click();
    cy.url().should('include', '/my-profile');
    cy.get('body').should('be.visible');
    cy.get(':nth-child(1) > .sc-iqVWFU', { timeout: 10000 })
      .should('exist')
      .should('be.visible')
      .type('sadha2145@gmail.com', { force: true });
    cy.get(':nth-child(2) > .sc-iqVWFU', { timeout: 10000 })
      .should('exist')
      .should('be.visible')
      .type('SecurePass@123', { force: true });
    cy.get('.sc-bUbRBg', { timeout: 5000 })
      .should('exist')
      .should('be.visible')
      .click();
    cy.get('.sc-fIosxK', { timeout: 5000 })
      .should('exist')
      .should('be.visible')
      .click();
      cy.get('[data-testid="RNE__Image__children__container"]',{timeout:10000}).should("be.visible");
      cy.get(':nth-child(2) > .btn').should('exist').should('be.visible').click();
      cy.get(':nth-child(1) > .form-control').should('be.visible').should('exist').clear().type('SADHA SIVAM');
      cy.get(':nth-child(2) > .form-control').should('be.visible').should('exist').clear().type('M');
      cy.get(':nth-child(4) > .form-control',{timeout:10000}).should('be.visible').should('exist').clear().type('Hello Everyone !! I Hope all are Doing Good in ur Path !!');
      cy.get(':nth-child(5) > .form-group',{timeout:10000}).should('be.visible').should('exist').click({force:true});
  });

  
  it('Verify the Edit Profile Option in the Website', () => {
    cy.visit('https://staging.vantr.io/');
    cy.get('body', { timeout: 10000 }).should('be.visible');
    cy.get('[href="/my-profile"] > .ant-avatar > .anticon > svg', { timeout: 5000 })
      .should('be.visible')
      .click();
    cy.url().should('include', '/my-profile');
    cy.get('body').should('be.visible');
    cy.get(':nth-child(1) > .sc-iqVWFU', { timeout: 10000 })
      .should('exist')
      .should('be.visible')
      .type('sadha2145@gmail.com', { force: true });
    cy.get(':nth-child(2) > .sc-iqVWFU', { timeout: 10000 })
      .should('exist')
      .should('be.visible')
      .type('SecurePass@123', { force: true });
    cy.get('.sc-bUbRBg', { timeout: 5000 })
      .should('exist')
      .should('be.visible')
      .click();
    cy.get('.sc-fIosxK', { timeout: 5000 })
      .should('exist')
      .should('be.visible')
      .click();
      cy.get('[data-testid="RNE__Image__children__container"]',{timeout:10000}).should("be.visible");
      
      cy.get(':nth-child(3) > .btn').should('be.visible').should('exist').click();

      cy.get('[style="align-items: center; justify-content: center; margin-top: 64px; -webkit-box-align: center; -webkit-box-pack: center;"] > .css-1dbjc4n').should('be.visible').should('exist').click();
      cy.get('#walletconnect-qrcode-text > a',{timeout:10000 }).should('be.visible').should('exist').click();
      
  });

});
