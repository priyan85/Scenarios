Feature: Check Navigation
In order to navigate through the website 
I must be able to click on menus, buttons etc. on the home page

Background: 
Given I am on the homepage

@manual, @navigation, @primaryHeaderMenu
Scenario Outline: Check Header Bar
Given I see the header bar at the top of the page
When I click on a primary menu '<item> '
Then A panel section is opened with secondary navigation items

Examples: HeaderPrimaryMenu
|item               |
|Plan and Book      |
|Manage Your booking|
|Service            |

@manual,@navigation, @footerMenus
Scenario Outline: Check FooterLinks
Given I see the footer at the bottom of the page
And I see 3 footer sections
When I click on a footer item '<item>' in any section
Then I am redirected to the page '<url>'

Examples: FooterMenu
|item          |url                                                        |
|FacebookIcon  |https://www.facebook.com/transavia                         |
|About Us      |https://corporate.transavia.com/en-NL/home/                |
|Service       |https://www.transavia.com/en-NL/my-transavia/account/logon/|


@manual, @navigation, @topdestination
Scenario: Check TopDestinations
Given I see the section Our Top Destination
When I select on a destination
Then I am redirected to the book a flight page
And The from and to fields are autopopulated


@manual, @navigation, @alldestination
Scenario: Check All Destinations
Given Not sure where to fly
When I select view all destinations
Then I am redirected to the destinations page


