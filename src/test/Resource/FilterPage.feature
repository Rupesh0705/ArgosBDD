Feature: Filterpage

  Background:

    Given User is on the web page of Argos web site
    When user search for any product
    Then user should be able to get the result for the search product
    Given user is on the result page
    When  user clicks on £5 - £10 price range checkbox
    Then  user should be able to see all the products between those price range

    Scenario: Sports and Fitness filter

      Given  user is on the filter page
      When  user clicks on sports and fitness filter button
      Then  user should be able to see all the products related to that filter

