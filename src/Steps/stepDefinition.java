package Steps;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gherkin.lexer.Fi;

public class stepDefinition {
	
	static WebDriver driver;
	
	@Given("^I am in Login Page$")
	public void i_am_in_Login_Page() throws Throwable {
	    
		System.setProperty("webdriver.chrome.driver", "drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://en-master.wunderflats.xyz/login?redirect=/my/account");
	}

	@When("^I enter valid \"([^\"]*)\" and \"([^\"]*)\"$")
	public void i_enter_valid_and(String Email, String Password) throws Throwable {
		
		driver.findElement(By.id("email")).sendKeys(Email);
		driver.findElement(By.id("password")).sendKeys(Password);
	    
	}

	@When("^I click on Login Button$")
	public void i_click_on_Login_Button() throws Throwable {
		
		driver.findElement(By.cssSelector("button.Button")).click();
	    
	}

	@Then("^I should be able to login successfully$")
	public void i_should_be_able_to_login_successfully() throws Throwable {
	    Thread.sleep(3000);
		WebElement loggedInUser = driver.findElement(By.cssSelector("h3.Card-title.heading-small"));
		Assert.assertEquals(loggedInUser.getText(),"Profile");
		
	}
	
	@Given("^I am in Profile Page$")
	public void i_am_in_Profile_Page() throws Throwable {
	    
	}
	
	@When("^I update \"([^\"]*)\" , \"([^\"]*)\" , \"([^\"]*)\" , \"([^\"]*)\" , \"([^\"]*)\" , \"([^\"]*)\", \"([^\"]*)\" , \"([^\"]*)\" , \"([^\"]*)\", \"([^\"]*)\" , \"([^\"]*)\" , \"([^\"]*)\" , \"([^\"]*)\" , \"([^\"]*)\" and  \"([^\"]*)\"$")
	public void i_update_and(String FirstName, String LastName, String Email, String PhoneNumber, String Nationality, String BirthDate, String BirthMonth, String BirthYear, String StreetAddress, String ZIPCode, String City, String State, String Country, String JobTitle, String CompanyName) throws Throwable {
	    
		driver.findElement(By.id("firstName")).clear();
		driver.findElement(By.id("firstName")).sendKeys(FirstName);
		driver.findElement(By.id("lastName")).clear();
		driver.findElement(By.id("lastName")).sendKeys(LastName);
		driver.findElement(By.id("email")).clear();
		driver.findElement(By.id("email")).sendKeys(Email);
		driver.findElement(By.name("nationality")).sendKeys(Nationality);
		driver.findElement(By.cssSelector("input.DateTextInput-day")).clear();
		driver.findElement(By.cssSelector("input.DateTextInput-day")).sendKeys(BirthDate);
		driver.findElement(By.cssSelector("input.DateTextInput-month")).clear();
		driver.findElement(By.cssSelector("input.DateTextInput-month")).sendKeys(BirthMonth);
		driver.findElement(By.cssSelector("input.DateTextInput-year")).clear();
		driver.findElement(By.cssSelector("input.DateTextInput-year")).sendKeys(BirthYear);
		driver.findElement(By.id("addressLine1")).clear();
		driver.findElement(By.id("addressLine1")).sendKeys(StreetAddress);
		driver.findElement(By.id("zipCode")).clear();
		driver.findElement(By.id("zipCode")).sendKeys(ZIPCode);
		driver.findElement(By.id("city")).clear();
		driver.findElement(By.id("city")).sendKeys(City);
		driver.findElement(By.id("region")).clear();
		driver.findElement(By.id("region")).sendKeys(State);
		driver.findElement(By.id("addressCountry")).sendKeys(Country);
		driver.findElement(By.id("jobTitle")).clear();
		driver.findElement(By.id("jobTitle")).sendKeys(JobTitle);
		driver.findElement(By.id("companyName")).clear();
		driver.findElement(By.id("companyName")).sendKeys(CompanyName);
	}

	@When("^I click on Save Profile Button$")
	public void i_click_on_Save_Profile_Button() throws Throwable {
		
		driver.findElement(By.cssSelector("button.btn")).click();
	    
	}

	@Then("^I verify the updated details$")
	public void i_verify_the_updated_details() throws Throwable {
		
		WebElement FirstName = driver.findElement(By.xpath("//*[@id=\"firstName\"]"));
		Assert.assertEquals("BharatRaj", FirstName.getAttribute("Value"));
		WebElement LastName = driver.findElement(By.id("lastName"));
		Assert.assertEquals("RajBharat", LastName.getAttribute("Value"));
		WebElement Email = driver.findElement(By.id("email"));
		Assert.assertEquals("bharu292+2@gmail.com", Email.getAttribute("Value"));
		Select select = new Select(driver.findElement(By.name("nationality")));
		WebElement option = select.getFirstSelectedOption();
		String defaultItem = option.getText();
		Assert.assertEquals(defaultItem,"India");
		WebElement BirthDate = driver.findElement(By.cssSelector("input.DateTextInput-day"));
		Assert.assertEquals(BirthDate.getAttribute("Value"),"02");
		WebElement BirthMonth = driver.findElement(By.cssSelector("input.DateTextInput-month"));
		Assert.assertEquals(BirthMonth.getAttribute("Value"),"09");
		WebElement BirthYear = driver.findElement(By.cssSelector("input.DateTextInput-year"));
		Assert.assertEquals(BirthYear.getAttribute("Value"),"1992");
		WebElement StreetAddr = driver.findElement(By.id("addressLine1"));
		Assert.assertEquals(StreetAddr.getAttribute("Value"),"TestAddress");
		WebElement ZIPCode = driver.findElement(By.id("zipCode"));
		Assert.assertEquals(ZIPCode.getAttribute("Value"),"123456");
		WebElement City = driver.findElement(By.id("city"));
		Assert.assertEquals(City.getAttribute("Value"),"Chennai");
		WebElement State = driver.findElement(By.id("region"));
		Assert.assertEquals(State.getAttribute("Value"),"Tamil Nadu");
		Select select1 = new Select(driver.findElement(By.id("addressCountry")));
		WebElement Country = select1.getFirstSelectedOption();
		String defaultItem1 = Country.getText();
		Assert.assertEquals(defaultItem1,"India");
		WebElement JobTitle = driver.findElement(By.id("jobTitle"));
		Assert.assertEquals(JobTitle.getAttribute("Value"),"Sr. QA");
		WebElement CompanyName = driver.findElement(By.id("companyName"));
		Assert.assertEquals(CompanyName.getAttribute("Value"),"Deloitte");
		
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("window.scrollBy(0,1000)");
		
		driver.findElement(By.className("AppHeaderUserNavigation")).click();
		driver.findElement(By.cssSelector("a.AppHeader-link.AppHeader-link--logout")).click();
		
	}
	
	@Given("^I am in Main Page$")
	public void i_am_in_Main_Page() throws Throwable {
	    
	}

	@When("^I try to access My Account section$")
	public void i_try_to_access_My_Account_section() throws Throwable {
		
		driver.navigate().to("https://en-master.wunderflats.xyz/my/account");
	}

	@Then("^I should not be able to access$")
	public void i_should_not_be_able_to_access() throws Throwable {
		
		WebElement LoginScreen = driver.findElement(By.cssSelector("h4.heading-small.heading-small--centered"));
		Assert.assertTrue(LoginScreen.isDisplayed());
	    
	}
	
	@Then("^I should not be able to login successfully$")
	public void i_should_not_be_able_to_login_successfully() throws Throwable {
	    
		WebElement LoginScreen = driver.findElement(By.cssSelector("h4.heading-small.heading-small--centered"));
		Assert.assertTrue(LoginScreen.isDisplayed());
	}
}
