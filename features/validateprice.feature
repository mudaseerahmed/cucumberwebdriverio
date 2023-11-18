Feature: validate price is correct 

  Scenario Outline: User should be able to validate price

    Given I am on the home page
    When user clicks on price button
    Then validate price between lower and higher
    Then user enters different values in search textbox "<input_value>"
    Examples:
    |input_value|
    |tennis     |
    |football   |
    
   
