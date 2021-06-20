Feature: Currency
  @smoke @reg
@Test1
  Scenario: User should be able to change the currency
    Given User is on homepage
    When User click on currency
    Then User should able to change the currency