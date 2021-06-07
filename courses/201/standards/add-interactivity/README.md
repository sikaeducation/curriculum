# Add Interactivity to Websites

## Topics

* [/] - dom-1
* [/] - dom-query-selectors
* [/] - dom-create-append-elements
* [/] - dom-manipulation
* [/] - linting
* [/] - eslint
* [/] - js-strings
* [/] - js-objects
* [/] - js-arrays
* [/] - js-foreach
* [/] - dom-events
* [/] - data-structures-intro
* [/] - data-structures-trees
* [/] - html-buttons
* [/] - dom-classlist
* [/] - html-forms
* [/] - html-form-inputs
* [/] - form-submission
* [/] - css-forms
* [/] - query-strings
* [/] - js-find-filter
* [/] - js-map

## Other Exercises

// Input: Any string of words with/without punctuation.
// Output: A scrambled form of the same sentence but with the word's first and last
//   letter's positions intact.

var myString = "According to a research team at Cambridge University, it doesn't matter in what order the letters in a word are, the only important thing is that the first and last letter be in the right place. The rest can be a total mess and you can still read it without a problem. This is because the human mind does not read every letter by itself, but the word as a whole. Such a condition is appropriately called Typoglycemia.";

// scramble(myString) => "Acrdinocg to a recreash taem at Cirbgmade Uvinsertiy, it deno'st maettr in waht oderr the lterets in a wrod are, the olny intapromt thing is taht the fsrit and last lteetr be in the rgiht palce. The rset can be a taotl mses and you can stlil read it wohtiut a pebrolm. This is beuscae the hmaun mind does not raed erevy ltteer by iteslf, but the wrod as a wolhe. Such a ctoiodnin is atrrpaplopeiy caleld Togplmicyeya."

---

* Write a function declaration called squareMe that takes in a parameter and return that parameter squared
* Write an anonymous function literal with the variable name cubeMe that takes in a parameter and returns that parameter cubed
* Write a function declaration called addTwoNumbers that takes in two parameters and returns the sum of those parameters
* Write a function declaration called addManyNumbers that takes in any number of parameters and returns the sum of the input parameters

---

// starting at index 0, put numbers 1-5 in order in the array variable below.
var array = [];

// put the number 5 in index 5 in arrayTwo listed below
var arrayTwo = [0,0,0,0,0,0,0];

// put 3 empty nested arrays in arrayThree listed below
var arrayThree = [];

// Starting at index 0 put a string with a length of 3, an empty object,
// and a number, into arrayFour listed below
var arrayFour = [];

// put a key of foo and a value of "bar" into the object below
var object = {};

// put a key of nested with a value of an empty object into the object below
var objectTwo = {};

// put a key of superNested and a value of an object with a key of nested and a value of "data" into the object below
var objectThree = {};

// put a key of arrayTwo and a value of arrayTwo (not a string),
// and a second key of arrayThree and a value of arrayThree (not a string) into the object below
var objectFour = {};

---

// Given an integer n return 'odd' if the number of its divisors 
// is odd. Otherwise return 'even'.

// Examples:

// All prime numbers have exactly two divisors (hence 'even')

// For n=12 the divisors are [1,2,3,4,6,12] – 'even'

// For n=4 the divisors are [1,2,4] – 'odd'

// Write some tests!

function oddity(n) {

}

---

// You need to write a method that counts the number of occurences 
// of a word in a given text.

// The word counter is created as follows:

// var sample  = "Lorem ipsum";
// var counter = wordCounter(text);
// Then one can get the count for a given word like this:

// console.log(counter.count("Lorem")); // 1
// console.log(counter.count("hey"));   // 0
// The input texts are simple: they only contain ASCII characters, 
// words are either separate by white spaces or punctuation 
// (only , and .). If the input only contain punctuation or white 
// spaces, it should return a count of 0 for all words.

// For performance reasons, your implementations should count 
// the words once and not parse the text each time the count 
// method is called.

var wordCounter = function(text) {

};

---

// You need to write a method that counts the number of occurences 
// of a word in a given text.

// The word counter is created as follows:

// var sample  = "Lorem ipsum";
// var counter = wordCounter(text);
// Then one can get the count for a given word like this:

// console.log(counter.count("Lorem")); // 1
// console.log(counter.count("hey"));   // 0
// The input texts are simple: they only contain ASCII characters, 
// words are either separate by white spaces or punctuation 
// (only , and .). If the input only contain punctuation or white 
// spaces, it should return a count of 0 for all words.

// For performance reasons, your implementations should count 
// the words once and not parse the text each time the count 
// method is called.

var wordCounter = function(text) {

};

---

### Reduce Practice

//add all elements together
function sum(arr){

}

// multiply all elements together
function multiply(arr){

}

//double each element using reduce
function double(arr){

}

// //count the letters
function countLetters(str){

}