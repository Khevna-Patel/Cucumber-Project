
Feature: registration


  @Test4 @reg
  Scenario: User should able to register successfully
    Given user is on registration page
    When user enters all required registration details
    Then user should able to register successfully
