package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.java.en.Given;
import cucumber.api.junit.Cucumber;
@RunWith(Cucumber.class)

@CucumberOptions(
		features="F:\\workspace\\CucumberDemo\\src\\main\\java\\feature\\Tags.feature",
		glue= {"StepDenination"},
		plugin= {"pretty","html:output"},
		monochrome=true,
		strict=true,
		dryRun=false,
		tags= {"~@smoke","~@regression"}
		)

public class TagsRunner {

	//tags= {"@smoke"} --> for execution of one tag
	//tags= {"@smoke,@regression"} ----> scenario containing @smoke or @regression
	//tags= {"@smoke","@regression"}----> scenario containig smoke and regression tags
	//tags= {"~@smoke","~@regression"}---->Scenario that does not contains smoke or regression
}
