package StepDenination;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.junit.Cucumber;


public class ExamplesDataDrivenStepDefinition {

	@Given("^A scenario for test$")
	public void a_scenario_for_test() throws Throwable {
	    System.out.println("Given scenario started");
	}
	
	@Then("^take \"(.*)\" and \"(.*)\" from examples table$")
	public void take_one_and_two_from_examples_table(String one,String two) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    System.out.println("Name one= "+one+" Name two= "+two);
	}
	
	@Then("^take \"(.*)\" from table$")
	public void take_unites_states_from_table(String add) throws Throwable {
	    System.out.println("Address= "+add);
	}
	
	@Then("^test executin done$")
	public void test_executin_done() throws Throwable {
	    System.out.println("Test Complete");
	}

}
