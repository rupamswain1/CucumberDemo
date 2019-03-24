package StepDenination;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.java.en.Given;
import cucumber.api.junit.Cucumber;


public class TagsStepDefination {
	@Given("^open$")
	public void open()
	{
		System.out.println("given executed");
	}
}
