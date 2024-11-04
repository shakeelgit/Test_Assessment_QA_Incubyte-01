import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import HomePage from '../../pageObject/HomePage';

const homePage = new HomePage();

Given('I open the Website', () => {
    homePage.visit()
});

When('I click the Create An Account link',()=>{
    homePage.createAnAccount()
})

When('I enter the First Name as {}',(FirstName)=>{
    homePage.enterFirstName(FirstName)
})

When('I enter the Last Name as {}',(LastName)=>{
    homePage.enterLastName(LastName)
})

When('I enter the Email Id as {}',(EmailId)=>{
    homePage.enterEmailId(EmailId)
})

When('I enter the Password as {}',(Password)=>{
    homePage.enterPassword(Password)
})

When('I enter the ConfirmPassword as {}',(ConfirmPassword)=>{
    homePage.enterConfirmPassword(ConfirmPassword)
})

Then('I click the Create An Account Button',()=>{
    homePage.clickCreateAnAccountButton()
})

Then('I signing in the website',()=>{
    homePage.signingTheWebsite()
})

When ('I enter the RegisteredEmail Id as {}',(EmailId)=>{
  homePage.registeredEmailId(EmailId)
})

When ('I enter the RegisteredPassword as {}',(Password)=>{
    homePage.registeredPassword(Password)
})

When('I click Sign In Button',()=>{
    homePage.clickSignIn()
})

Then('I verify the Registered Account Confirm Message as {}',(RegMConfirmRegMassageessage)=>{
    homePage.regConfirmMessage(RegMConfirmRegMassageessage)
})

When('I click on the SignOutDropDown',()=>{
    homePage.signOutDropDown()
})

Then('I click on the SignOut',()=>{
    homePage.signOut()
})



