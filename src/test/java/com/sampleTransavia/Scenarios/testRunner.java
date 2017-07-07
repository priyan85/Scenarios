package com.sampleTransavia.Scenarios;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
 
@RunWith(Cucumber.class)
@CucumberOptions(
		format = {"pretty", "html:target/cucumber"},
		features = "Features",
				glue = "com.sampleTransavia.Scenarios",
				tags= {"@automation"}
		) 

 
public class testRunner {
}