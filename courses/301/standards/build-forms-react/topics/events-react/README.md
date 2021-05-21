[Official Vue docs on event handling](https://v3.vuejs.org/guide/events.html#multiple-event-handlers)

## In templates

You attach event handlers in Vue with the `@` syntax:

```vue
<template>
  <button @click="handleClick"></button>
</template>

<script>
export default {
  methods: {
    handleClick(event){
      // Behavior
    }
  }
}
</script>
```

Like binding, this has a longer syntax: `v-on:click="handleClick"`. The syntaxes are otherwise equivalent, and you should always use the `@` syntax. Note that unlike React, you can attach listeners to HTML elements *and* components.

### Passing in arguments

In addition to giving the event a method, you can alternately invoke the method and pass in any other arguments you want:

```vue
<template>
  <ul>
    <li v-for="item in list" :key="item.id">
      <button @click="handleClick(item)"></button>
    </li>
  </ul>
</template>

<script>
export default {
  methods: {
    handleClick(item){
      // Behavior
    }
  }
}
</script>
```

If you need to pass something in and have access to the original event, you can pass in the special `$event` argument:

```vue
<template>
  <button @click="handleClick"></button>
  <button @click="handleClick($event)"></button> // Same as above
  <button @click="handleClick($event, item)"></button> // With other arguments
  <button @click="handleClick(item, $event)"></button> // Position isn't important
</template>
```

## Types of events

All normal DOM events have Vue equivalents:

* `@click`
* `@submit`
* `@keydown`
* `@focus`
* `@change`
* [DOM Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events)

There are also built-in modifiers for common tasks:

```vue
<template>
  <form @submit.prevent="formHandler"></form>       // Adds `event.preventDefault()`
  <buton @click.stop="buttonHandler">Click</button> // Adds `event.stopPropagation()`
  <buton @click.self="buttonHandler">Click</button> // Only fires if this element fired the event, not a child
</template>
```

## Custom Events

You can also fire custom events from components with `this.$emit`:

```vue
//NewButton.vue
<template>
  <button @click="addNew">New</button>
</template>

<script>
export default {
  name: "NewButton",
  methods: {
    addNew() {
      this.$emit("add-new", "Any parameters", { you: "want" })
    },
  },
}

//ItemForm.vue
<template>
  <new-button @add-new="addNew" />
</template>

<script>
export default {
  name: "ItemForm",
  methods: {
    addNew(someString, someObject) {
      // Whatever
    },
  },
}
</script>
```

This is the primary way you communicate from child components to parent components.
