This needs to be ported from Vue to React

## Assessment

* [[WineFlix]]

## Topics

* [ ] - Vue CLI
* [ ] - Build components
* [ ] - Templates
* [ ] - Props
* [ ] - 1-way Binding
* [ ] - Iteration
* [ ] - Conditional rendering
* [ ] - Computed properties
* [ ] - Applying styles

## Questions

### Where do you draw the line between passing in a whole object versus a series of props?

There's no science to this, but here are some ideas:

* If all of the props are part of the same thing and there are 3 or less of them, I'd probably pass them in individually
* If all of the props are part of the same thing and there are 4 or more, I'd probably just pass in an object
* If any of the props are part of different things, I'd consider grouping at least one of them in an object

The practical concern is that when you pass in something as an object, you have to either alias the property you want to use in a computed property or do {{ someObject.someProperty }} all over the template. You lose some of the type warnings if you just pass in an object for everything, all the time. On the other hand, passing in 8 props to a component can make it hard to understand at a macro-level what's actually being given to it.
