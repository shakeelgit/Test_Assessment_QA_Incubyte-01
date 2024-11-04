
class HomePage {
    visit() {
      cy.visit('https://magento.softwaretestingboard.com/');
    }
    createAnAccount()
    {
      cy.contains('a', 'Create an Account').click();
    }

    enterFirstName(FirstName)
    {
      cy.get('#firstname').type(FirstName)
    }

    enterLastName(LastName)
    {
      cy.get('#lastname').type(LastName)
    }

    enterEmailId(EmailId)
    {
      cy.get('#email_address').type(EmailId)
    }

    enterPassword(Password)
    {
      cy.get('#password').type(Password)
    }

    enterConfirmPassword(ConfirmPassword)
    {
      cy.get('#password-confirmation').type(ConfirmPassword)
    }

    clickCreateAnAccountButton()
    {
      cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
    }

    registeredEmailId(EmailId)
    {
      cy.get('#email').type(EmailId)
    }

    registeredPassword(Password)
    {
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type(Password)
    }

    signingTheWebsite()
    {
      cy.contains('Sign In').click({force:true});
    }

    clickSignIn()
    {
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click({force:true})
    }

    regConfirmMessage(ConfirmRegMassage)
    {
      cy.get('.message-success > div').should('contain',ConfirmRegMassage)
    }

    signOutDropDown()
    {
      cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click()
    }
    
    signOut()
    {
      cy.get("div[aria-hidden='false'] li[data-label='or'] a").click()
    }
  }
  export default HomePage;