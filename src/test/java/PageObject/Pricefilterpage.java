package PageObject;

import BaseClass.DriverFactory;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class Pricefilterpage extends DriverFactory {


    @FindBy(id = "filter-price-£5 - £10-checkbox")
    WebElement pricefilter;

    public void price(){
        pricefilter.click();
    }



} // end of class
