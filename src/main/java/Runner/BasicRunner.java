package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="F:\\workspace\\CucumberDemo\\src\\main\\java\\feature\\Basic.feature",//used to map feature files
				glue= {"StepDenination"},//maps step defination file.
				plugin= {"pretty","html:output"},//report generation way can be added
				monochrome=true,//gives readable output in console
				strict=true,//fails tc if mapping of step in feature file and step definition is not done
				dryRun=false// run a test to check mapping
		
		)
public class BasicRunner {

}
