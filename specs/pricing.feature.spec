# Feature: Sleek Test Cases
## Scenario: Clicking the Pricing link from the Header menu navigates user to the Pricing page
* Given I went to the Sleek SG "Home" page
* When I click on the "Pricing" link
* Then I should be navigated to the Sleek SG "Pricing" page

## Scenario: Correct corporate secretary details should display after updating accounting progress line
* Given I am on the Sleek SG "Pricing" page
* When I click the "Find out more" button for "Corporate secretary"
* And I Adjust shareholder/price Then verify that the shareholder/price

   |noShareholders        |pricePerYear |xpath             |
   |----------------------|-------------|------------------|
   |1 Shareholder         |S$240/year   |//*[@id="step1"]  |
   |2 Shareholders        |S$360/year   |//*[@id="step2"]  |
   |3 - 5 Shareholders    |S$420/year   |//*[@id="step3"]  |
   |6 - 9 Shareholders    |S$540/year   |//*[@id="step4"]  |
   |10 - 20 Shareholders  |S$720/year   |//*[@id="step5"]  |
   |21 - 30 Shareholders  |S$960/year   |//*[@id="step6"]  |
   |> 30 Shareholders     |S$1,140/year |//*[@id="step7"]  |

A tear down step for every scenario
___
* Clear all tasks
