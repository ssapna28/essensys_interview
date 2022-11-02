package com.essensys.steps;

import com.essensys.pages.FindProductPage;
import com.essensys.pages.ResultPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class Topbarsteps {
    @Given("^I am on home page$")
    public void iAmOnHomePage() {
    }

    @When("^I Select one \"([^\"]*)\"$")
    public void iSelectOne(String pro)  {
       new FindProductPage().Selectmenu(pro);
    }

    @When("^I mousehover on resources able to click on \"([^\"]*)\"$")
    public void iMousehoverOnResourcesAbleToClickOn(String subpro)  {
        new FindProductPage().selectpro();

    }

    @Then("^I verify the navigate to \"([^\"]*)\"$")
    public void iVerifyTheNavigateTo(String mess)  {
        Assert.assertEquals(mess, new ResultPage().verifyTextSuccessfully(mess));

    }

    @When("^I click on flex oprators$")
    public void iClickOnFlexOprators() {
        new FindProductPage().clickonflex();
    }
}
