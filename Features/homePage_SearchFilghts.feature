Feature: Search Flights
In order to make a booking 
a user must be able to search for flights

Background:
Given I am on the transavia homepage

@automation
Scenario Outline: Search one way flights for an adult
Given I see the search flight box
When I select the <origin> and <destination> cities
And I select no return
And I search with the <onward> date
Then I see multiple search results with only outbound flights

Examples: SearchSingle
|origin                           |destination     |onward       |
|Amsterdam (Schiphol), Netherlands|Faro, Portugal  |10 Aug 2017  |
|Eindhoven, Netherlands           |Alicante, Spain |20 Sep 2017  |

@automation
Scenario Outline: Search return flights for an adult
Given I see the search flight box
When I select the <origin> and <destination> cities
And I search with the <onward> date
And I select <returnDate> as return date
Then I see multiple search results with outbound and inbound flights

Examples: SearchReturn
|origin                           |destination     |onward       |returnDate |
|Amsterdam (Schiphol), Netherlands|Faro, Portugal  |10-08-2017   |15-08-2017 |
|Eindhoven, Netherlands           |Alicante, Spain |20-08-2017   |30-08-2017 |


@manual
Scenario Outline: Search return flights for multiple people
Given I see the search flight box
When I select the <origin> and <destination> cities
And I search with the <onward> date
And I select <returnDate> as return date
And I search with passengers <adult> , <child>, <infant>
Then I see multiple search results with outbound and inbound flights

Examples: SearchMultiplePax
|origin                           |destination     |onward       |returnDate |adult  |child |infant  |
|Amsterdam (Schiphol), Netherlands|Faro, Portugal  |10 Aug 2017  |15 Aug 2017|2      |1     |1       |
|Eindhoven, Netherlands           |Alicante, Spain |20 Sep 2017  |30 Sep 2017|1      |0     |1       |
|Eindhoven, Netherlands           |Alicante, Spain |20 Sep 2017  |25 Sep 2017|4      |0     |3       |


@manual, @checkMessages
Scenario Outline: Search flights check messages passenger counts
Given I see the search flight box
When I select the <origin> and <destination> cities
And I search with the <onward> date
And I select <returnDate> as return date
And I search with passengers <adult> , <child>, <infant>
Then I see messages for the entered search criteria <message>

Examples: SearchMultiple
|origin                           |destination     |onward       |returnDate |adult  |child |infant  |message                                                        |
|Amsterdam (Schiphol), Netherlands|Faro, Portugal  |10 Aug 2017  |15 Aug 2017|0      |0     |0       |Please select at least one adult to continue with your booking |
|Amsterdam (Schiphol), Netherlands|Faro, Portugal  |10 Aug 2017  |15 Aug 2017|26     |0     |0       |Are you planning on traveling with more than 25 people?        |
|Amsterdam (Schiphol), Netherlands|Faro, Portugal  |10 Aug 2017  |15 Aug 2017|24     |2     |1       |Are you planning on traveling with more than 25 people?        |
|Eindhoven, Netherlands           |Alicante, Spain |20 Sep 2017  |null       |0      |26    |0       |Are you planning on traveling with more than 25 people?        |
|Eindhoven, Netherlands           |Alicante, Spain |20 Sep 2017  |null       |0      |5     |0       |Assistance is required for children ages 5 to 11 travelling without an adult (16+).|
|Eindhoven, Netherlands           |Alicante, Spain |20 Sep 2017  |15 Aug 2017|0      |0     |26      |Each adult (>16 years) may travel with 2 babies (<2 years).    |
|Eindhoven, Netherlands           |Alicante, Spain |20 Sep 2017  |15 Aug 2017|1      |0     |4       |Each adult (>16 years) may travel with 2 babies (<2 years).    |
|Eindhoven, Netherlands           |Alicante, Spain |20 Sep 2017  |null       |1      |1     |1       |No message                                                     |
