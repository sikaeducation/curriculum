# Interviewing: Take-Home Challenges: Exercises

## Activities

Complete the following take-home challenges. Make sure you include a README, include appropriate styling, and keep a clean commit history. As a bonus, add tests.

### Store Inventory Manager

Welcome to team Gilded Rose. You are asked to help build our store inventory management system. All items have a `sell_in` value which denotes the number of days we have left to sell the item and a `quality` value which denotes how valuable the item is. At the end of each day our software should lower both values for every item by 1.

Pretty simple, right? There are some exceptions:

* Once the `sell_in` days is less then zero, `quality` degrades twice as fast;
* The `quality` of an item can never be negative or increase beyond 50;
* The "Aged Brie" goods actually increases in quality each passing day;
* "Sulfuras" goods, being legendary items, never change their `sell_in` or `quality` values;
* "Backstage passes", like aged brie, increases in `quality` as its `sell_in` value decreases;
* Not just that: for "backstage passes" `quality` increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but `quality` drops to 0 after the concert (`sell_in` 0 or lower).

Complicated enough, now? Well, there is a new item category that we would like to see added to the inventory management system: "Conjured" items degrade in quality twice as fast as normal items.

Just for extra clarification, an item can never have its `quality` increase above 50, however "Sulfuras" is a legendary item and as such its `quality` is 80 and it never alters.

You won't find mixed categories (like a "Conjured Sulfuras / Backstage pass of Doom"), but the category name may be not in the first position (ie: expect something like "SuperUberSword, Conjured" or "Mighty Sulfuras Armour of Ultimate Awesomeness").

Here are some sample items:

| Item | Sell In | Quality |
| --- | --- | --- |
| +5 Dexterity Vest | 10 | 20 |
| Aged Brie | 2 | 0 |
| Elixir of the Mongoose | 5 | 7 |
| Sulfuras, Hand of Ragnaros | 0 | 80 |
| Backstage passes to a TAFKAL80ETC concert | 15 | 20 |
| Conjured Mana Cake | 3 | 6 |

Write a web app that allows you add new items and displays the current state of the inventory. Degradation should be calculated based on the date the item was added. Note that you'll need to parse the name of the item to determine its type.

---

### Memory Game

In a simple [memory game](http://en.wikipedia.org/wiki/Concentration(game)) we need a grid of tiles representing different numbers. Pairs of numbers are randomly place around the board. Each turn, a player chooses a number to peek at, and then replaces it face down. If the player chooses the same number twice in a row, the tiles are removed from the grid. The aim is to clear the board in the lowest number of turns.

Start by building a web app to play this game with 8 tiles. Next, allow the player to choose the number of tiles before the game. Make sure to handle invalid input.
