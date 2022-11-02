Feature: Find Products

  Scenario Outline: verify user should find product successfully
    Given I am on home page
    When  I Select one "<Product>"


    Examples:
      | Product           |
      | Landlords         |
      | essensys Platform |
      | Success stories   |
      | Investors         |

    Scenario: verify user should we able to click on submenu
      Given I am on home page
      When  I mousehover on resources able to click on "Thought leadership"

    Scenario: verify user should we able to click on flex operators
      Given I am on home page
      When  I click on flex oprators
      Then  I verify the navigate to "Flexible space made simple"