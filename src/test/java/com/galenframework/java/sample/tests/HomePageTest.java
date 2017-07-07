package com.galenframework.java.sample.tests;

import java.io.IOException;

import org.openqa.selenium.By;
import org.testng.annotations.Test;

import com.galenframework.java.sample.components.GalenTestBase;


public class HomePageTest extends GalenTestBase {

	 @Test(dataProvider = "devices")
	    public void welcomePage_shouldLookGood_onDevice(TestDevice device) throws IOException {
	        load("/");
	        checkLayout("/galenSpecs/homePage.spec", device.getTags());
	    }

}
