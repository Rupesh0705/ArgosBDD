$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/Resource/BrandPage.feature");
formatter.feature({
  "name": "Brands",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the web page of Argos web site",
  "keyword": "Given "
});
formatter.match({
  "location": "HomepageStepDefinition.user_is_on_the_web_page_of_Argos_web_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user search for any product",
  "keyword": "When "
});
formatter.match({
  "location": "HomepageStepDefinition.user_search_for_any_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to get the result for the search product",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageStepDefinition.user_should_be_able_to_get_the_result_for_the_search_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on the result page",
  "keyword": "Given "
});
formatter.match({
  "location": "PriceRangeSteps.user_is_on_the_result_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on £5 - £10 price range checkbox",
  "keyword": "When "
});
formatter.match({
  "location": "PriceRangeSteps.user_clicks_on_£_£_price_range_checkbox(Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to see all the products between those price range",
  "keyword": "Then "
});
formatter.match({
  "location": "PriceRangeSteps.user_should_be_able_to_see_all_the_products_between_those_price_range()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on the filter page",
  "keyword": "Given "
});
formatter.match({
  "location": "SportsAndFitnessFilterSteps.user_is_on_the_filter_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on sports and fitness filter button",
  "keyword": "When "
});
formatter.match({
  "location": "SportsAndFitnessFilterSteps.user_clicks_on_sports_and_fitness_filter_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"category-facet-accordion-content\"]/div/div/div[1]\"}\n  (Session info: chrome\u003d97.0.4692.99)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-38V5E90\u0027, ip: \u0027192.168.0.27\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 97.0.4692.99, chrome: {chromedriverVersion: 97.0.4692.71 (adefa7837d02a..., userDataDir: C:\\Users\\Rupesh\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:55408}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: fde12113ca14b50b6b53cbc43412a4ee\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"category-facet-accordion-content\"]/div/div/div[1]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy18.click(Unknown Source)\r\n\tat PageObject.ResultPage.CategorySportsAndFitness(ResultPage.java:44)\r\n\tat StepDefinition.SportsAndFitnessFilterSteps.user_clicks_on_sports_and_fitness_filter_button(SportsAndFitnessFilterSteps.java:20)\r\n\tat ✽.user clicks on sports and fitness filter button(src/test/Resource/BrandPage.feature:12)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user should be able to see all the products related to that filter",
  "keyword": "Then "
});
formatter.match({
  "location": "SportsAndFitnessFilterSteps.user_should_be_able_to_see_all_the_products_related_to_that_filter()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Brand filter",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User is on resultpage",
  "keyword": "Given "
});
formatter.match({
  "location": "BrandFilterPage.user_is_on_resultpage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Brand filter",
  "keyword": "When "
});
formatter.match({
  "location": "BrandFilterPage.user_clicks_on_Brand_filter()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be able to get all the selected brand products",
  "keyword": "Then "
});
formatter.match({
  "location": "BrandFilterPage.user_should_be_able_to_get_all_the_selected_brand_products()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});