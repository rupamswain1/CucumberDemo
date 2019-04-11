package StepDenination;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class BackgroundStepDefinition {

	@Given("^user browsing through product$")
	public void user_browsing_through_product() throws Throwable {
	    System.out.println("output******-User browsing through product");
	}
	
	@Then("^user selects product$")
	public void user_selects_product() throws Throwable {
	    System.out.println("output******-User selected Product");
	}
	
	@Given("^user is on cart$")
	public void user_is_on_cart() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    System.out.println("output******-user is on cart");
	}

	@Then("^user selects payment$")
	public void user_selects_payment() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    System.out.println("output******-user selects payment");
	}

	@Given("^user is on cart page$")
	public void user_is_on_cart_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    System.out.println("output******-user is on cart");
	}

	@Then("^user logged out$")
	public void user_logged_out() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   System.out.println("output******-user logged out");
	}

	@Then("^user adds \"([^\"]*)\"$")
	public void user_adds(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    System.out.println("output******-Product: "+arg1);
	}
}
