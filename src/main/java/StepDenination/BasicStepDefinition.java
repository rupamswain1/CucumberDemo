package StepDenination;

import org.testng.Assert;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class BasicStepDefinition {
	@Given("^feature and scenario writen$")
	public void feature_and_scenario_writen() throws Throwable {
	   System.out.println("featues and scenario written");
	}

	@Then("^this is then step$")
	public void this_is_then_step() throws Throwable {
	    System.out.println("Then step executed");
	}
	
	@And("^this is and step$")
	public void this_is_and_step() throws Throwable {
	    System.out.println("And step executed");
	}
	
	@Then("^cucumber basic is completed$")
	public void cucumber_basic_is_completed() throws Throwable {
	    System.out.println("cucumber basic completed");

	}

}
