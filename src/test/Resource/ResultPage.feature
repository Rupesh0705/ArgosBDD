Feature: Search Result Page functionalities

  Background:
Given User is on the web page of Argos web site
When user search for any product
Then user should be able to get the result for the search product

    Scenario: Click on £5 - £10 price range
      Given user is on the result page
      When  user clicks on £5 - £10 price range checkbox
      Then  user should be able to see all the products between those price range

