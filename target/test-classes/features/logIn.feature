Feature: Log in
Background:
  Given User is on homepage
  @login @reg
  Scenario Outline: User should not be able to log in successfully with invalid credentials
    When User click on login
    And User type "<Email>" and "<Password>"
    And click on login button
    Then User should not be able to log in
    And User should get "<errormessage>"

    Examples:
      | Email         | Password| errormessage |
      |test@gmail.com |         |Login was unsuccessful. Please correct the errors and try again. The credentials provided are incorrect|
      |               |Xyz1234  |Please enter your email|
      |               |         |Login was unsuccessful. Please correct the errors and try again. The credentials provided are incorrect|
      |##@gmail.com   |Xyz1234  |Login was unsuccessful. Please correct the errors and try again. No customer account found|



