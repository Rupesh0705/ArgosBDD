package StepDefinition;

import PageObject.Homepage;
import cucumber.api.java.en.When;

public class MultipleProductsSteps {

    Homepage homepage = new Homepage();

    @When("User Search for {string}")
    public void user_Search_for(String item) {

       homepage.MultipleSearch(item);
    }

}
