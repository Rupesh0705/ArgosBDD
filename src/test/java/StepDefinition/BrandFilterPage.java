package StepDefinition;

import PageObject.ResultPage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class BrandFilterPage {

    ResultPage resultPage = new ResultPage();


    @Given("User is on resultpage")
    public void user_is_on_resultpage() {

    }

    @When("user clicks on Brand filter")
    public void user_clicks_on_Brand_filter() {

        resultPage.CategoryBrand();
    }

    @Then("user should be able to get all the selected brand products")
    public void user_should_be_able_to_get_all_the_selected_brand_products() {
        // Write code here that turns the phrase above into concrete actions
        throw new cucumber.api.PendingException();
    }

}
