package com.sampleTransavia.Scenarios;

import pageObjects.homePageSearchFlightPO;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
 
import static junit.framework.Assert.assertTrue;
import static junit.framework.TestCase.assertFalse;
import static org.junit.Assert.assertEquals;

import java.util.List;
import java.util.concurrent.TimeUnit;


public class stepDefinitions {
 
    private WebDriver driver;
 
    @Before
    public void before() {
    	 System.setProperty("webdriver.gecko.driver", "C:\\geckodriver-v0.16.1-win64\\geckodriver.exe");
        driver = new FirefoxDriver();
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
        driver.get("https://www.transavia.com/en-NL/home/");
    }
 
    @After
    public void after() {
        driver.quit();
    }
     
    @Given("^I am on the transavia homepage$")
    public void checkWebsiteOpen() {
    	 assertEquals("https://www.transavia.com/en-NL/home/", driver.getCurrentUrl());
    }

    @Given("^I see the search flight box$") 
    public void checkSearchBoxExists(){
      assertEquals(homePageSearchFlightPO.flightSearchBox(driver).isDisplayed(),true);
    }
 
    
    @When("^I select the (.*?) and (.*?) cities$")
    public void selectSource(String origin, String destination) throws InterruptedException {
   		homePageSearchFlightPO.locDeparture(driver).sendKeys(origin,Keys.TAB);
    	homePageSearchFlightPO.locDestination(driver).sendKeys(destination,Keys.TAB);
    }
    
    @When("^I search with the (.*?) date$")
    public void selectOnwardDate(String onward) throws InterruptedException {
    	homePageSearchFlightPO.onwardDate(driver).sendKeys(onward);
    }
 
    @When("^I select (.*?) as return date$")
    public void selectReturnDate(String returnDate) throws InterruptedException {
    	JavascriptExecutor executor = (JavascriptExecutor)driver;
    	executor.executeScript("arguments[0].click();", homePageSearchFlightPO.checkNoReturn(driver));
    	homePageSearchFlightPO.returnDate(driver).sendKeys(returnDate,Keys.ENTER);
    }
 
    
    @When("^I select no return$")
    public void checkNoReturn() throws InterruptedException {
    	JavascriptExecutor executor = (JavascriptExecutor)driver;
    	executor.executeScript("arguments[0].click();", homePageSearchFlightPO.checkNoReturn(driver));
    }
  
  
    @Then("^I see multiple search results with only outbound flights$") 
    public void checkSearchResults() throws InterruptedException{ 
    	boolean varText = false;
    	homePageSearchFlightPO.submitForm(driver).submit();
    	varText= homePageSearchFlightPO.searchResults(driver, "Inbound flight");
    	assertEquals(varText,false);
       }
    
    @Then("^I see multiple search results with outbound and inbound flights$") 
    public void checkBothSearchResults() throws InterruptedException{    	
    	boolean varText = false;   
    	varText= homePageSearchFlightPO.searchResults(driver, "Inbound flight");
    	assertEquals(varText,true);
    }


}