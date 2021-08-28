# Programming: Math

Most of the math operators commonly used in programming are self-explanatory:

```js
1 + 1 // 2
2 - 1 // 1
3 * 3 // 9
4 / 2 // 2
```

Note that multiplication is done with the `*` symbol, not `x`.

There are two additional math symbols that are common in programming and bear more explanation: Exponentiation and modulo.

## Exponentiation

To raise something to an exponent, use `**` twice. So, `2³` would be written:

```js
2**3 === 8 // true
```

## Modulo

`%`, the modulo operator, evaluates to the remainder in a division. For example, 4 does not divide into 3 evenly; it leaves a remainder of 1. So, `4 % 3` is 1. Some other examples:

```js
4 % 2 === 0
8 % 3 === 2
7 % 7 === 0
3 % 2 === 1
```

Modulo has a few uses, but the most common one is telling whether something is even/odd, doing something every third item, and so on.

```js
const someNumber = 42

if (someNumber % 2 === 0){ // An even number is one that divides evenly into 2
  console.log("It's even!")
} else {
  console.log("It's odd!")
}
```

## Watch Out!

You can only do math with values with a number data type. This also means you can't do math with strings that look like numbers, like `"3" + "2"`.
