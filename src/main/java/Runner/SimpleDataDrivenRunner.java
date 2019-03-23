package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features= {"F:\\workspace\\CucumberDemo\\src\\main\\java\\feature\\SimpleDataDriven.feature",
		"F:\\workspace\\CucumberDemo\\src\\main\\java\\feature\\Basic.feature"},
		glue= {"StepDenination"},
		plugin= {"pretty","html:output"},
		monochrome=true,
		strict=true,
		dryRun=false
		)
public class SimpleDataDrivenRunner {

}
