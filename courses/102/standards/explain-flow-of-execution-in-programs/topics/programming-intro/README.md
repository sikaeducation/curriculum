# Introduction to Programming

Programming is fundamentally about turning inputs into outputs.

(diagram)

In a social media app, the inputs might be your posts, your comments, and names or topics you want to read. The outputs might be other people's posts and comments.

(example)

In scientific programming, the inputs might be each occurrence of an event, and the output might be a statistical summary of the events.

(example)

In television programming, the inputs might be button presses on a remote control, and the output might be streams of TV shows on the screen.

(example)

In each case, a program transforms some kind of inputs into some kind of outputs.

## Elements of Programming

It may surprise you to learn that almost all programming is based on a relatively small set of concepts. The complexity in programming isn't based on a large number of ideas, but rather the near-limitless ways they can be explored and combined. The three most basic elements of programming are sequence, selection, and iteration. This three ideas form the building blocks of everything from the tiniest programming exercise to sprawling enterprise software. 

### Sequence

Sequence is controlling the order your code executes in. If you print 4 things to the screen in order, you're using the idea of sequence:

```js
console.log("You put your right foot in")
console.log("You put your right foot out")
console.log("You put your right foot in (again)")
console.log("You shake it all about")
```

Programs can also be a tangle of redirections where the sequence isn't immediately clear. This program does the same thing:

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

Even simple ideas in programming can have a lot of depth and nuance.

### Selection

Another core element of programming is selection, which is only running parts of the program under certain circumstances. At its simplest, selection looks like this:

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

Like sequence, selection can have a lot of complexity.

### Iteration

The last core element of programming is iteration, or looping. Often, you want to do the same operation multiple times. For example, you might want to print every video in a list of videos:

```js
for (video in videos){
  console.log(video)
}
```

Just like sequence and selection, however, iteration can become very complex. This code is also a series of iterations over a list of videos:

```js
function filterIds(){
    return this.videos
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

## Programming Languages

Sequence, selection, and iteration are in just about every programming language, often even in similar ways. For example, all of these programs do the same thing:

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

Different programming languages encourage thinking about programs in particular ways and have different tradeoffs regarding speed, readability, ease of learning, and types of tasks they were designed for. These examples and exercises are given in JavaScript, but ultimately different programming languages have more in common than they don't. The skills learned in one language tends to not only transfer to other languages, but may even enrich your understanding and abilities in that language as well.
