package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features= {"F:\\workspace\\CucumberDemo\\src\\main\\java\\feature\\Background.feature"},
		glue= {"StepDenination"},
		plugin= {"pretty","html:output"},
		monochrome=true,
		dryRun=false,
		strict=true
		)



public class BackgroundRunner {

}
