Feature: Open Magento Website

  Scenario Outline: User opens the Magento demo website
  Given I open the Website
  When  I click the Create An Account link
  When  I enter the First Name as <FirstName>
  When  I enter the Last Name as <LastName>
  When  I enter the Email Id as <EmailId>
  When  I enter the Password as <Password>
  When  I enter the ConfirmPassword as <ConfirmPassword>
  Then  I click the Create An Account Button
  Then  I verify the Registered Account Confirm Message as <ConfirmRegMassage>
  When  I click on the SignOutDropDown
  Then  I click on the SignOut
  Then  I signing in the website
  When  I enter the RegisteredEmail Id as <EmailId>
  When  I enter the RegisteredPassword as <Password>
  When  I click Sign In Button
  
 Examples:
 |FirstName |LastName|EmailId      |Password |ConfirmPassword|ConfirmRegMassage                                 |
 |Shakeel J6|Khan    |sj7@gmail.com|abc@1234!|abc@1234!      |Thank you for registering with Main Website Store.|