# Encoding: Base64

In traditional counting, the numbers start at 0 and go up to 9. The next number adds a 1 to the tens place and the count starts over again. This system is called base-10 because there are 10 different possible values in each place.

There are other number bases that can be used in counting. For example, binary is base-2 since the only values are 0 and 1. Otherwise, the counts work the same:

| Base-10 | Base-2 |
| --- | --- |
| 0   | 0     |
| 1   | 1     |
| 2   | 10    |
| 3   | 11    |
| 4   | 101   |
| 5   | 111   |
| 6   | 1001  |
| 7   | 1011  |
| 8   | 1111  |
| 9   | 10001 |
| 10  | 10011 |
| 12  | 10111 |
| 13  | 11111 |

Base-2 is useful because many simple things, such as electricity going on and off, can be used represent and store numbers.

You don't have to use only numerals. The alphabet is often used a counting system that could be called base-26:

| Base-10 | Base-26 |
| --- | --- |
| 0   | a     |
| 1   | b     |
| 2   | c     |
| 3   | d     |
| 4   | e     |
| 5   | f     |
| ... | ...   |
| 25  | y     |
| 26  | z     |
| 27  | aa    |
| 28  | ab    |
| 29  | ac    |

One of the advantages of using a larger counting system is that one character can convey a denser amount of information. For example, the base-10 number `100` is `cw` in base-26, which means the same number can be represented with one fewer character. This is useful for things like sending data over a network where every character counts for speed.

Base64 is a counting system that uses all the uppercase and lowercase letters, the numbers 0-9, as well as the characters `-` and `_` for a total of 64 possible values in each position. There are two popular uses of Base64:

* **Encoding data in JWTs**: In this case, Base64 doesn't actually decrease the character count, but it allows many special characters like `{` and `:` to be represented with characters that are safe for URLs.
* **Encoding binary files**: Many binary assets such as images can be represented by Base64 data urls instead of binary. This reduces the overall size and makes it easier to embed assets directly into pages instead of linking to them.

## Additional Resources

| Resource | Description |
| --- | --- |
| [Wikipedia: Base64](https://en.wikipedia.org/wiki/Base64) | Wikipedia's article on Base64 |
| [MDN: Base64](https://developer.mozilla.org/en-US/docs/Glossary/Base64) | MDN's reference on Base64 |
| [MDN: Data Urls](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) | MDN's guide to Data Urls |
