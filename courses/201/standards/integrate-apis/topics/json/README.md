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
  weight: 60
}
```

If it looks very similar to JavaScript objects, it's because the format was heavily inspired by it. There are some notable differences though:

* Keys always needed to be double-quoted
* String values need to be double-quotes (booleans and numbers don't)
* Trailing commas are not allowed

The increased strictness allows programming languages to understand it quicker.

## JSON is Language-Agnostic

JSON is a format for sending data over HTTP. HTTP is language agnostic. That means JSON is language agnostic! While the syntax is inspired by JavaScript, JSON can be read and created by Java, PHP, Ruby, Python, and any other language that works on the web.

| Client Data Format | HTTP Data Format | Server Data Format |
| --- | --- | --- |
| JavaScript Object | JSON | JavaScript Object |
| JavaScript Object | JSON | Ruby Hash |
| JavaScript Object | JSON | Python Dictionary |
| Python Dictionary | JSON | Java Object |
| Ruby Hash | JSON | JavaScript Object |

## Watch Out!

* JSON strings look like JavaScript objects, but its very important to understand that it's not a JavaScript data type. Once something is JSON, you can't access properties or iterate over values anymore until it's parsed back into an object. It is a format for serializing data.

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
  user: {
    firstName: "Cannonball",
    lastName: "Adderly",
  }
}
```

So why the switch from XML to JSON? By not having closing XML tags, the data is able to have way fewer characters. Since network requests are a major bottleneck on the web, saving characters in HTTP responses is a big speed improvement.
