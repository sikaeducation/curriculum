# Interviewing: Whiteboarding: Exercises

## Questions

* Recall 3 questions you can use to clarify the problem.
* Recall 3 questions you can use to enumerate possible approaches.
* Recall 3 questions you can use to work the problem.
* Recall 3 questions you can use to reflect on the problem.

## Activities

Use the 4-step interview protocol on these problems:

* [5 Gardens](#5-gardens)
* [Goat, Cabbage, Wolf](#goat-cabbage-and-wolf)
* [Stable Employment Problem](#stable-employment-problem)
* [Weird Words](#weird-words)
* [Apple Building](#apple-building)
* [Credit Card Mask](#credit-card-mask)
* [Day to Date](#day-to-date)
* [Longest Sorted Distinct String](#longest-sorted-distinct-string)

---

### 5 Gardens

https://github.com/sikaeducation/5-gardens

---

### Goat Cabbage and Wolf

https://github.com/sikaeducation/goat-caggage-wolf

---

Write a function named reverse that takes a string argument and returns the string reversed. `.reverse()` should not be used.

---

### Stable Employment Problem

We're going to solve an age-old problem that has plagued mountain villages and startups alike. Given two entities that have preferences for matching, how do you ensure that these matchups are "stable"? When we talk about stability, we mean that if two entities prefer each other over the partner they are matched with, the arrangement is not stable.

Given a list of developers, match them to companies. Match them such that no developer prefers a company that also prefers that developer over the one they are matched with. The "preferences" property represents an ordered list of preferences, with the first element being the most preferred.

```js
const developers = [{
  name: "Lilly",
  preferences : ["AirBnB", "Facebook", "Pivotal", "Amazon", "Lyft", "Uber"]
},{
  name: "Terrence",
  preferences : ["Lyft", "Facebook", "Pivotal", "AirBnB", "Amazon", "Uber"]
},{
  name: "Ken",
  preferences : ["Uber", "Amazon", "Facebook", "AirBnB", "Pivotal", "Lyft"]
},{
  name: "Zan",
  preferences : ["AirBnB", "Pivotal", "Facebook", "Amazon", "Lyft", "Uber"]
},{
  name: "Rebecca",
  preferences : ["AirBnB", "Lyft", "Uber", "Facebook", "Pivotal", "Amazon"]
}]

const companies = [{
  name: "AirBnB",
  preferences : ["Lilly", "Terrence", "Ken", "Zan", "Rebecca"]
},{
  name: "Facebook",
  preferences : ["Ken", "Lilly", "Terrence", "Zan", "Rebecca"]
},{
  name: "Pivotal",
  preferences : ["Terrence", "Zan", "Lilly", "Ken", "Rebecca"]
},{
  name: "Amazon",
  preferences : ["Rebecca", "Terrence", "Ken", "Zan", "Lilly"]
},{
  name: "Lyft",
  preferences : ["Rebecca", "Ken", "Zan", "Lilly", "Terrence"]
},{
  name: "Uber",
  preferences : ["Lilly", "Terrence", "Ken", "Zan", "Rebecca"]
}]
```

---

### Weird Words

Change every letter in a given string to the next letter in the alphabet. The function will take a single string as a parameter.

EXAMPLES:

* "Hello" --> "Ifmmp"
* "What is your name?" --> "Xibu jt zpvs obnf?"
* "zoo" --> "app"
* "zzZAaa" --> "aaABbb"

Note: Spaces and special characters should remain the same. Capital letters should transfer in the same way but remain capitilized. 

---

### Apple Building

Input: Integer n
Output: String

Example:

`a(4)` prints as

```
   A   
  A A  
 A A A 
A     A
```

`a(8)` prints as

```
       A       
      A A      
     A   A     
    A     A    
   A A A A A   
  A         A  
 A           A 
A             A
```

`a(12)` prints as

```
           A           
          A A          
         A   A         
        A     A        
       A       A       
      A         A      
     A A A A A A A     
    A             A    
   A               A   
  A                 A  
 A                   A 
A                     A
```

Note:

* Each line's length is 2n - 1
* Each line should be concatenate by line break "\n"
* If n is less than 4, it should return ""
* If n is odd, a(n) = a(n - 1), eg a(5) == a(4); a(9) == a(8)

---

### Credit Card Mask

Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, the credit card number is masked.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples:

```
maskify("4556364607935616") == "############5616"
maskify(     "64607935616") ==      "#######5616"
maskify(               "1") ==                "1"
maskify(                "") ==                 ""

# "What was the name of your first pet?"
maskify("Skippy")                                   == "##ippy"
maskify("Nananananananananananananananana Batman!") == "####################################man!"
```

---

### Date to Day

If I give you a date, can you tell me what day that date is? For example, December 8th, 2015 is a Tuesday.

Your job is to write the function `day(date)` which takes a string representation of a date as input, in the format 
`YYYYMMDD`. The example would be "20151208". The function needs to output the string representation of the day, so in this case "Tuesday".

Your function should be able to handle dates ranging from January 1st, 1582 (the year the Gregorian Calendar was introduced) to December 31st, 9999. You will not be given invalid dates. Remember to take leap years into account.

---

### Longest Sorted Distinct String

Take 2 strings including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters, - each taken only once - coming from s1 or s2.

Examples:

```py
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
```
