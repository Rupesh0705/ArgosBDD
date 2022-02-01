package PageObject;

import BaseClass.DriverFactory;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class Homepage extends DriverFactory {


    @FindBy(id = "searchTerm")
    WebElement searchbox;

    @FindBy(className = "_2mKaC")
    WebElement searchButton;


    public void Dosearch(String item){
       searchbox.sendKeys(item);
        searchButton.click();
    }

    public void MultipleSearch(String item){

        searchbox.sendKeys(item);
        searchButton.click();
    }

}// end of class
