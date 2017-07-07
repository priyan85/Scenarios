Feature: Check cookies
In order to comply to law
A cookie bar must be shown on the page

Background:
Given All browser cookies are cleared
And I am on the transavia homepage

@manual, @acceptCookies
Scenario: Accept Cookies
Given I see a cookie bar 
When I click on accept in the cookie bar
Then Cookies are stored in the browser
