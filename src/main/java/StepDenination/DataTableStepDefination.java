package StepDenination;

import java.util.List;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class DataTableStepDefination 
{
	@Given("^Feature file Step defination and runner are written$")
	public void a()
	{
		System.out.println("Given Executed");
	}
	
	@Then("^data uname and pwd are read from data table$")
	public void b(DataTable data)
	{
		List<List<String>> dat=data.raw();
		System.out.println("Uname= "+dat.get(0).get(0));
		System.out.println("ped= "+dat.get(0).get(1));
	}
	
	@Then("^data location is read from data table$")
	public void c(DataTable data)
	{
		List<List<String>> dat=data.raw();
		System.out.println("Location= "+dat.get(0).get(0));
	}
	
	@Then("^execution is complete$")
	public void d()
	{
		System.out.println("Execution completed");
	}
}
