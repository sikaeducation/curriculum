Templates are how HTML is represented in Vue. They work similar to templating mechanisms in other languages and frameworks. Some high-level ideas:

* All regular HTML is valid (unlike JSX which requires special words for things like `class` or Pug which is an entirely new syntax)
* It relies on a directive syntax which adds attributes to elements (similar to Angular, different than Handlebars)
* Any HTML attribute can be bound to anything on the component or most arbitrary JS expressions (like JSX, unlike HTMLBars)
* Event listeners can and should be attached in the template syntax since you shouldn't work directly with the DOM
* Values can be used in templates with `{{}}` (like Handlebars, unlike React)

This template:

```vue
<template>
  <div class="some-component">
    <h2>{{ heading }}</h2>
    <ul v-if="listShowing">
      <li v-for="listItem in listItems" :key="listItem.id">{{ listItem.content }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    heading() {
      return "These are a few of my favorite things"
    },
    listShowing() {
      return true
    },
    listItems() {
      return [{
        id: 1,
        content: "Raindrops on roses",
      }, {
        id: 2,
        content: "Whiskers on kittens",
      }]
    },
  },
}
</script>
```

Will render as this HTML:

```html
<div class="some-component">
  <h2>These are a few of my favorite things</h2>
  <ul>
    <li>Raindrops on roses</li>
    <li>Whiskers on kittens</li>
  </ul>
</div>
```

Templates in Vue 1.x and 2.x were required to have a single top-level element. This is still a sound practice, but it's no longer required in Vue 3.x.

## Syntax

There are two syntaxes for using templates:

### Single-File Components

Templates in SFCs are contained between `<template>` tags:

```vue
<template>
  <p>Hi!</p>
</template>

<script>
</script>

<style>
</style>
```

Use these with webpack or Vue CLI.

### Inline Components

Inline components use a `template` attribute:

```vue
const SomeComponent = {
  computed: {},
  methods: {},
  template: "<p>Hi!</p>",
}
```

Use this syntax when you're making components without a build system. Other than challenges around escaping quotes, it has the same features as the SFC syntax.

## Exercises

* What's the relationship between HTML and Vue templates?
* What are two ways you can use templates in Vue?
* What specific considerations do you need to make for using Vue in a server-templated environment?
* Where will the template look for `{{someProp}}`?

## References

* [Official Vue docs on template syntax](https://v3.vuejs.org/guide/template-syntax.html#template-syntax)
