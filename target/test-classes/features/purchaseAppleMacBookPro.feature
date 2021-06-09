Feature: Purchase Apple MacBook Pro 13-inch
@Test3
  Scenario: User should be able to purchase Apple MacBook Pro 13-inch successfully
    Given User is registered user of https://demo.nopcommerce.com/
    When User click on Apple MacBook Pro 13-inch
    And Click on Add to Cart button
    And Click on checkout
    And Enter checkout details
    And select next day air in shipping method
    And Select credit card in payment method
    And Type payment details
    And Click on confirm
    Then User should able to see order in process confirmation message


