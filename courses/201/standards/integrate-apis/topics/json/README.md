# JSON

JSON is a common format for sending and receiving data on the web.

```json
{
  "name": "Pikachu",
  "abilities": [{
    "name": "static"
  },{
    "name": "lightning-rod"
  }],
  "weight": 60
}
```

If this looks very similar to JavaScript objects, that's because the format was inspired by it. There are some notable differences though:

* Keys always needed to be in double-quotes
* String values need to be in double-quotes (booleans and numbers don't)
* Trailing commas are not allowed

The increased strictness allows programming languages to process it quicker.

## JSON is Language-Agnostic

JSON is a format for sending data over HTTP. HTTP is language agnostic, which means JSON is language agnostic. While the syntax is inspired by JavaScript, JSON can be read and created by Java, PHP, Ruby, Python, and any other language used on the web. Some examples:

| Client Data Format | HTTP Data Format | Server Data Format |
| --- | --- | --- |
| JavaScript Object | JSON | JavaScript Object |
| JavaScript Object | JSON | Ruby Hash |
| JavaScript Object | JSON | Python Dictionary |
| Python Dictionary | JSON | Java Object |
| Ruby Hash | JSON | JavaScript Object |

No matter what the language generating or receiving the request is, JSON can be used to send data between them.

## Watch Out!

JSON strings look like JavaScript objects, but its very important to understand that it's not a JavaScript data type. Once something is JSON, you can't access properties or iterate over values anymore until it's parsed back into an object. It is a format for serializing data.

## History

The predecessor to JSON was XML. A piece of XML data might look like this:

```xml
<user>
  <first-name>Cannonball</first-name>
  <last-name>Adderly</last-name>
</user>
```

The equivalent data in JSON looks like this:

```json
{
  "user": {
    "firstName": "Cannonball",
    "lastName": "Adderly",
  }
}
```

So why the switch from XML to JSON? By not having closing tags like XML, the data has fewer characters. Since network requests are a major bottleneck on the web, saving characters in HTTP responses helps to speed up the web.

## Additional Resources

| Resource | Description |
| --- | --- |
| [MDN: JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) | MDN's reference on JSON |
| [MDN: JSON Tutorial](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON) | MDN's tutorial on JSON |
| [Video: Learn JSON in 10 Minutes](https://www.youtube.com/watch?v=iiADhChRriM) | Web Dev Simplified's guide to JSON |
