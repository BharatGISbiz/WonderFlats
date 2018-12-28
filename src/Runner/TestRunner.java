package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="Features",
		glue={"Steps"},
		plugin= {"html:target/cucumber-html-report","json:target/cucumber.json"}
		)

public class TestRunner {

}
