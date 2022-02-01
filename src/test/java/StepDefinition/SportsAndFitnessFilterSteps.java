package StepDefinition;

import PageObject.ResultPage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SportsAndFitnessFilterSteps {

    ResultPage resultPage = new ResultPage();


    @Given("user is on the filter page")
    public void user_is_on_the_filter_page() {
    }

    @When("user clicks on sports and fitness filter button")
    public void user_clicks_on_sports_and_fitness_filter_button() {

        resultPage.CategorySportsAndFitness();
    }

    @Then("user should be able to see all the products related to that filter")
    public void user_should_be_able_to_see_all_the_products_related_to_that_filter() {

    }

}
