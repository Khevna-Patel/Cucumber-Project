Feature: New online store is open!
@Test
  Scenario: User should able to add comment successfully in new online store is open
    Given User is on new online store  is open page
    When User type title and comment
    Then User should able to see comment added in comment box

