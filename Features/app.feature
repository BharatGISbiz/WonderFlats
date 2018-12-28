Feature: WonderFlats Application

  Scenario Outline: Login to the application with valid credentials
  Given I am in Login Page
  When I enter valid "<Email>" and "<Password>"
  And I click on Login Button
  Then I should be able to login successfully
  
  Examples:
  | Email              | Password  |
  | bharu292+2@gmail.com | Bharath8$ |
  
  Scenario Outline: To verify Users can change their User Profile data
  Given I am in Profile Page
  When I update "<FirstName>" , "<LastName>" , "<Email>" , "<PhoneNumber>" , "<Nationality>" , "<BirthDate>", "<BirthMonth>" , "<BirthYear>" , "<StreetAddress>", "<ZIPCode>" , "<City>" , "<State>" , "<Country>" , "<JobTitle>" and  "<CompanyName>"
  And I click on Save Profile Button
  Then I verify the updated details
  
  Examples:
  | FirstName | LastName  | Email                | PhoneNumber | Nationality | BirthDate | BirthMonth | BirthYear | StreetAddress | ZIPCode | City    | State      | Country | JobTitle | CompanyName |  |
  | BharatRaj | RajBharat | bharu292+2@gmail.com |  9886439594 | India       |        02 |         09 |      1992 | TestAddress   |  123456 | Chennai | Tamil Nadu | India   | Sr. QA   | Deloitte    |  |
  
  
  Scenario: To Verify My Account Section is accessed only in logged in
    Given I am in Main Page
    When I try to access My Account section
    Then I should not be able to access

  Scenario Outline: To verify user accounts are persisted only for a certain amount of time
  Given I am in Login Page
  When I enter valid "<Email>" and "<Password>"
  And I click on Login Button
  Then I should not be able to login successfully
  
  Examples:
  | Email              | Password  |
  | bharu292+3@gmail.com | Bharath8$ |