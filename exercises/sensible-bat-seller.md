# The Sensible Bat Seller

| Name | Notes |
| --- | --- |
| [JS OOP Partial](#js-oop-partial) | Class is scaffolded out already |
| [JS OOP Full](#js-oop-partial) | Builds the class also, also requires sorting logic |

## Challenges

### JS OOP Partial

#### Prompt

You have a store that sells baseball bats. Your inventory is represented as an array of objects, and each one has the following properties:

* `quantity`
* `unitPrice`
* `unitMargin`

Each batch is bought from a different supplier, so it comes with its own unit price and unit margin, which will determine your net revenue. Available items will be passed to the constructor of a `Quoter` class as an array.

Your task is to write the `.getQuote` method. It should return the price for a given quantity of items that maximizes your net revenue. Note that call to `.getQuote` method should not modify your stock, so multiple call to `.getQuote` should operate on the same stock. Your method should return one of the following strings:

* "Your order cannot be fulfilled, try a lower quantity" if you don't have enough stock
* "Your best quote for (quantity) items is (price)" if you have enought items in stock

Examples:

```js
const quoter = new Quoter([]);     
quoter.getQuote(1); // "Your order cannot be fulfilled, try lower quantity"
```

```js
const items = [{
  quantity: 10,
  unitPrice: 100,
  unitMargin: 1
},{
  quantity: 10,
  unitPrice: 110,
  unitMargin: 1.1
}];

const quoter = new Quoter(items);     
quoter.getQuote(10); // "Your best quote for 10 items is 1100.00"
```

#### Starter Code

```js
class Quoter {
  constructor(items = []){
    this.items = items.sort((a, b) => a.unitMargin < b.unitMargin)
    this.quantity = this.getQuantity()
  }
  getQuantity() {
    return this.items.reduce((total, current) => total + current.quantity, 0)
  }
  getQuote(quantity) {
    // Implement this
  }
}
```

#### Tests

```js
describe('Quoter', function() {
  it('should return a string when it will not fulfull the order', function() {
    const quoter = new Quoter([]);
    expect(quoter.getQuote(1)).to.equal("Your order cannot be fulfilled, try lower quantity");
  });

  it('should return the best order', function() {
    const quoter = new Quoter([{
      quantity: 10,
      unitPrice: 100,
      unitMargin: 1
    }]);
    expect(quoter.getQuote(11)).to.equal("Your order cannot be fulfilled, try lower quantity");
  });

  it('should return the best order', function() {
    const quoter = new Quoter([{
      quantity: 10,
      unitPrice: 100,
      unitMargin: 1
    }]);
    expect(quoter.getQuote(10)).to.equal("Your best quote for 10 items is 1000.00");
  });

  it('should return the best order', function() {
    const quoter = new Quoter([{
      quantity: 10,
      unitPrice: 100,
      unitMargin: 1.1
    },{
      quantity: 10,
      unitPrice: 110,
      unitMargin: 1
    }]);
    expect(quoter.getQuote(15)).to.equal("Your best quote for 15 items is 1550.00");
  });
});
```

#### Solutions

```js
class Quoter {
  constructor(items = []){
    this.items = items.sort((a, b) => a.unitMargin < b.unitMargin)
    this.quantity = this.getQuantity()
  }
  getQuantity() {
    return this.items.reduce((total, current) => total + current.quantity, 0)
  }
  getQuote(quantity) {
    if (this.quantity < quantity) {
      return 'Your order cannot be fulfilled, try lower quantity';
    } else {
      const price = this.getPrice(quantity)
      return `Your best quote for ${quantity} items is ${+price.toFixed(2)}`
    }
  }
  getPrice(quantity){
    return this.items.reduce((totalPrice, currentItem) => {
      const units = quantity > currentItem.quantity ? currentItem.quantity : quantity
      const price = units * current.unitPrice
      quantity = quantity - units
      return totalPrice + price
    }, 0)
  }
}
```

### JS OOP Full

#### Prompt

You have a store that sells baseball bats. Your inventory is represented as an array of objects, and each one has the following properties:

* `quantity`
* `unitPrice`
* `unitMargin`

Each batch is bought from a different supplier, so it comes with its own unit price and unit margin, which will determine your net revenue.

Your task is to write a `Quoter` class that does the following:

* Accepts available items in the constructor
* Has a public `.getQuote` method that returns the price for a given quantity of items that maximizes your net revenue. Note that call to `.getQuote` method should not modify your stock, so multiple call to `.getQuote` should operate on the same stock. Your method should return one of the following strings:

* "Your order cannot be fulfilled, try a lower quantity" if you don't have enough stock
* "Your best quote for (quantity) items is (price)" if you have enought items in stock

Examples:

```js
const quoter = new Quoter([]);     
quoter.getQuote(1); // "Your order cannot be fulfilled, try lower quantity"
```

```js
const items = [{
  quantity: 10,
  unitPrice: 100,
  unitMargin: 1
},{
  quantity: 10,
  unitPrice: 110,
  unitMargin: 1.1
}];

const quoter = new Quoter(items);     
quoter.getQuote(10); // "Your best quote for 10 items is 1100.00"
```

#### Tests

```js
describe('Quoter', function() {
  it('should return a string when it will not fulfull the order', function() {
    const quoter = new Quoter([]);
    expect(quoter.getQuote(1)).to.equal("Your order cannot be fulfilled, try lower quantity");
  });

  it('should return the best order', function() {
    const quoter = new Quoter([{
      quantity: 10,
      unitPrice: 100,
      unitMargin: 1
    }]);
    expect(quoter.getQuote(11)).to.equal("Your order cannot be fulfilled, try lower quantity");
  });

  it('should return the best order', function() {
    const quoter = new Quoter([{
      quantity: 10,
      unitPrice: 100,
      unitMargin: 1
    }]);
    expect(quoter.getQuote(10)).to.equal("Your best quote for 10 items is 1000.00");
  });

  it('should return the best order', function() {
    const quoter = new Quoter([{
      quantity: 10,
      unitPrice: 100,
      unitMargin: 1.1
    },{
      quantity: 10,
      unitPrice: 110,
      unitMargin: 1
    }]);
    expect(quoter.getQuote(15)).to.equal("Your best quote for 15 items is 1550.00");
  });
});
```

#### Solutions

```js
class Quoter {
  constructor(items = []){
    this.items = items.sort((a, b) => a.unitMargin < b.unitMargin)
    this.quantity = this.getQuantity()
  }
  getQuantity() {
    return this.items.reduce((total, current) => total + current.quantity, 0)
  }
  getQuote(quantity) {
    if (this.quantity < quantity) {
      return 'Your order cannot be fulfilled, try lower quantity';
    } else {
      const price = this.getPrice(quantity)
      return `Your best quote for ${quantity} items is ${+price.toFixed(2)}`
    }
  }
  getPrice(quantity){
    return this.items.reduce((totalPrice, currentItem) => {
      const units = quantity > currentItem.quantity ? currentItem.quantity : quantity
      const price = units * current.unitPrice
      quantity = quantity - units
      return totalPrice + price
    }, 0)
  }
}
```
