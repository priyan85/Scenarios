package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.util.List;

import org.junit.*;


public class homePageSearchFlightPO {

	private static WebElement element = null;
	

	public static WebElement locDeparture(WebDriver driver){
		element = driver.findElement(By.id("routeSelection_DepartureStation-input"));
		return element;
	}


	public static WebElement locDestination(WebDriver driver){
		element = driver.findElement(By.id("routeSelection_ArrivalStation-input"));
		return element;
	}

	public static WebElement flightSearchBox(WebDriver driver){
		element = driver.findElement(By.id("desktop"));
		return element;
	}
	
	public static WebElement onwardDate(WebDriver driver){
		element = driver.findElement(By.id("dateSelection_OutboundDate-datepicker"));
		return element;
	}
	
	public static WebElement returnDate(WebDriver driver){
		element = driver.findElement(By.id("dateSelection_IsReturnFlight-datepicker"));
		return element;
	}
	
	public static WebElement checkNoReturn(WebDriver driver){
		element = driver.findElement(By.id("dateSelection_IsReturnFlight"));
		return element;
	}
	
	public static boolean  searchResults(WebDriver driver, String varText){
		element = driver.findElement(By.tagName("body"));
		boolean flag = false;
		if (element.getText().contains(varText)){
    				flag = true;
    		}
    		else{
    			    		
    			flag = false;
    		}

		return flag;
    }

	
	public static WebElement submitForm(WebDriver driver){
		element = driver.findElement(By.id("desktop"));
		return element;
	}


}
