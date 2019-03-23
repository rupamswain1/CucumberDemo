package StepDenination;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class SimpleDataDrivenStepDefination {

	@Given("^all prerequisites are done$")
	public void all_done()
	{
		System.out.println("All prerequesite done");
	}
	
	@Then("^read \"(.*)\" and \"(.*)\" as two keyword$")
	public void read(String one, String two)
	{
		System.out.println(one + "  ,  "+two+" are read and are printed");
	}
	
	@And("^every thing is printed$")
	public void printed()
	{
		System.out.println("PACKUP");
	}
	
	@Then("^test is success$")
	public void success()
	{
		System.out.println("Nicely done");
	}
}
