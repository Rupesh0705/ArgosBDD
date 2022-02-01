package PageObject;

import BaseClass.DriverFactory;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class ResultPage extends DriverFactory {

    @FindBy(xpath = "//body/main[@id='app']/div[1]/div[3]/div[6]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[5]/button[1]/div[1]/span[1]")
    WebElement category;

    @FindBy(xpath = "//span[contains(text(),'£5 - £10')]")
    WebElement Pricerange;

    @FindBy(xpath = "//*[@id=\"category-facet-accordion-content\"]/div/div/div[1]")
    WebElement sportsandfitness;


    @FindBy(xpath = "//*[@id=\"filter-brands-nike-label\"]/div/div/svg")
    WebElement brand;



    public void  Category(String item){
        category.sendKeys(item);
        category.click();
    }

    public void ResultPageAssertion(){

        String ActualUrl = "https://www.argos.co.uk/search/nike/?clickOrigin=searchbar:events:term:nike";
        Assert.assertEquals(ActualUrl,"https://www.argos.co.uk/search/nike/?clickOrigin=searchbar:events:term:nike");
    }

    public void clickPriceRange(){

        Pricerange.click();

    }

    public void CategorySportsAndFitness(){

        sportsandfitness.click();
    }

    public void CategoryBrand(){
       // brand.sendKeys(item);
        brand.click();
    }



}//end of class
