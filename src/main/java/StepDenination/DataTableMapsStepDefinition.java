package StepDenination;

import java.util.Map;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class DataTableMapsStepDefinition {

	@Given("^All required data is available$")
	public void all_required_data_is_available() throws Throwable {
	    System.out.println("Given Executed");
	}

	@Then("^read username and password from datatable\\.$")
	public void read_username_and_password_from_datatable(DataTable arg1) throws Throwable {
	   Map<String, String> data=arg1.asMap(String.class, String.class);
	   System.out.println("Username= "+data.get("username")+" Password= "+data.get("password"));
	}
	
	@Then("^read department from table$")
	public void read_department_from_table(DataTable arg1) throws Throwable {
	   for(Map<String, String> data: arg1.asMaps(String.class, String.class))
	   {
		   System.out.println(data.get("Department"));
	   }
	}
	
}
