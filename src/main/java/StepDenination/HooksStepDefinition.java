package StepDenination;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;

public class HooksStepDefinition 
{
	@Before
	public void a()
	{
		System.out.println("Before hook executed");
	}
	
	@After
	public void b()
	{
		System.out.println("After ccok executed");
	}
	
	@Before("@tagged")
	public void a1()
	{
		System.out.println("Before hook with tag executed");
	}
	
	@After("@tagged")
	public void b1()
	{
		System.out.println("After ccok with tag executed");
	}
	
	@Before(order=1,value="@order")
	public void a2()
	{
		System.out.println("Before hook with order tag executed,order=1");
	}
	
	@After(order=1,value="@order")
	public void b2()
	{
		System.out.println("After ccok with tag executed, order=1");
	}
	
	@Before(order=2,value="@order")
	public void a3()
	{
		System.out.println("Before hook with tag executed,order=2");
	}
	
	@After(order=2,value="@order")
	public void b3()
	{
		System.out.println("After ccok with tag executed,order=2");
	}
	
	@Given("^open scenario one$")
	public void open_scenario_one() throws Throwable {
	   System.out.println("one executed");
	}

	@Given("^open scenario two$")
	public void open_scenario_two() throws Throwable {
	    System.out.println("two executed");
	}

	@Given("^open scenario three$")
	public void open_scenario_three() throws Throwable {
		System.out.println("three executed");
	}

}
