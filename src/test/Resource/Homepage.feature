Feature: Homepage Functionalities

  Scenario: search for the product
    Given User is on the web page of Argos web site
    When user search for any product
    Then user should be able to get the result for the search product


   @MultipleProduct
    Scenario Outline: Search for multiple products

      Given User is on the web page of Argos web site
      When  User Search for "<products>"
      Then user should be able to get the result for the search product
      Examples:
        | products |  |
        | nike     |  |
        | puma     |  |


