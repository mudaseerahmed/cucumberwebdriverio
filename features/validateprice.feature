Feature: validate price is correct 

  Scenario: User should be able to validate price

    Given I am on the home page
    When user clicks on price button
    Then validate price between lower and higher
   
