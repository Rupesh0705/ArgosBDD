package StepDefinition;

import PageObject.Homepage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class HomepageStepDefinition {

    Homepage homepage = new Homepage();


    @Given("User is on the web page of Argos web site")
    public void user_is_on_the_web_page_of_Argos_web_site() {
        // Write code here that turns the phrase above into concrete actions
    }

    @When("user search for any product")
    public void user_search_for_any_product() {
        homepage.Dosearch("nike");

    }

    @Then("user should be able to get the result for the search product")
    public void user_should_be_able_to_get_the_result_for_the_search_product() {
        // Write code here that turns the phrase above into concrete actions
    }

}
