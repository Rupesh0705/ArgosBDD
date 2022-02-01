package StepDefinition;

import PageObject.ResultPage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class PriceRangeSteps {

    ResultPage resultPage = new ResultPage();

    @Given("user is on the result page")
    public void user_is_on_the_result_page() {

        resultPage.ResultPageAssertion();
    }

    @When("user clicks on £{int} - £{int} price range checkbox")
    public void user_clicks_on_£_£_price_range_checkbox(Integer int1, Integer int2) {

        resultPage.clickPriceRange();
    }

    @Then("user should be able to see all the products between those price range")
    public void user_should_be_able_to_see_all_the_products_between_those_price_range() {

    }

}
