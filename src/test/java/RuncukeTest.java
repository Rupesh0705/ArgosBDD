import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;


@RunWith(Cucumber.class)

//@CucumberOptions(features = "src/test/Resource/Homepage.feature",tags = {"@MultipleProduct"})

@CucumberOptions(features = "src/test/Resource/ResultPage.feature")// for price range

//@CucumberOptions(features = "src/test/Resource/FilterPage.feature") // for category

/*@CucumberOptions(features ="src/test/Resource/BrandPage.feature",
        plugin = {"html:target/cucumber-html-report",
        "json:target/cucumber-jason-report,json",
        "junit:target/cucumber-xml-report.xml",
        "pretty:target/cucumber-pretty-report.txt"})
*/
public class RuncukeTest {


}
