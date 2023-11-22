Feature: validate price is correct 

  Scenario Outline: User should be able to validate search

    Given I am on the home page
    Then validate text of the product is "<input_value>"  
    Examples:
    |input_value|
    |clock       |
    |tennis     |
    |football   |
    