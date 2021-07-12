# Introduction to Programming

Programming is fundamentally about turning inputs into outputs.

(diagram)

In a social media app, the inputs might be your posts, your comments, and names or topics you want to read. The outputs might be other people's posts and comments.

(example)

In scientific programming, the inputs might be each occurrence of an event, and the output might be a statistical summary of the events.

(example)

In television programming, the inputs might be button presses on a remote control, and the output might be streams of TV shows on the screen.

(example)

In each case, a program transforms the given inputs into the expected outputs.

## Elements of Programming

It may surprise you to learn that almost all programming is based on a relatively small set of concepts. The complexity in programming isn't based on a large volume of building blocks, but rather the near-limitless ways they can be explored and combined.

### Sequence

For example, sequence is controlling the order your code executes in. If we print 4 things to the screen in order, we're using the idea of sequence:

```js
console.log("You put your right foot in")
console.log("You put your right foot out")
console.log("You put your right foot in (again)")
console.log("You shake it all about")
```

Programs can also be a tangle of redirections where the sequence isn't immediately clear:

```js
const hokeyPokey = () => console.log("You shake it all about")
console.log("You put your right foot in")
fetch("https://api.hokey-pokey.com")
  .then(parseJSON)
  .then(result => {
    console.log("You put your right foot in (again)")
    hokeyPokey()
  })

function parseJSON(response){
  console.log("You put your right foot out")
  return response.json()
}
```

Even simple ideas in programming can have a lot of depth.

### Selection

Another core element of programming is selection, or only running parts of the program under certain circumstances. At its simplest, it looks like this:

```js
if (television.isOn){
  westWorld.show()
}
```

However, this is also selection:

```js
if(television.isOn, () => {
  channels[currentChannel].show()
}, () => {
  switch(default){
    case "ABC":
      return true
      break
    case "CBS":
      return true
      break
    case "NBC":
      return true
      break
    default:
      return false
  }
})
```

### Iteration

Another core element is iteration, or looping. Often, you want to do the same operation multiple times. For example, you might want to print every word in a list:

```js
for (item in list){
  console.log(item)
}
```

This is also primarily iteration over a list:

```js
function filterIds(){
    return this.allVideos
        .filter(video => {
            const searchStrings = [ video.label ]
            if (video.tags){
                searchStrings.push(...video.tags.map(tag => tag.label))
            }
            return searchStrings
                .map(searchString => searchString.toLowerCase())
                .map(searchString => this.removeSpaces(searchString))
                .some(searchString => searchString.includes(
                    this.removeSpaces(this.searchTerm.toLowerCase())
                ))
        }).map(video => video.id)
}
```

---

This three ideas--Sequence, Selection, and Iteration--form the basis for everything from the tiniest programming exercise to the most complicated programs ever written. They're present in every programming language, often even in similar ways. All of these programs do the same thing:

```js
// JavaScript
for (item in list){
  console.log(item)
}
```

```java
// Java
for (str item : list){
  System.out.println(item)
}
```

```python
# Python
for item in list
  print(item)
```

```ruby
# Ruby
for item in list
  print item
end
```

Different programming languages encourage thinking about programs in particular ways and have different tradeoffs regarding speed, readability, ease of learning, and types of tasks they were designed for. Ultimately, different programming languages have more in common than they don't. The skills learned in ones language tend to not only transfer to other languages, but may even enrich your understanding and abilities in that language.
