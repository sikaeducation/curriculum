Conditionally rendering in Vue templates is achieved through `v-if`, `v-else-if`, and `v-else` directives. Their use closely mirrors the `if`/`else if`/`else` syntax in JavaScript:

```vue
<template>
  <div v-if="someConditionIsMet">Something</div>
  <p v-else-if="someOtherConditionIsMet">Something Else</p>
  <span v-else>Something Else</span>
</template>

<script>
export default {
  computed: {
    someConditionIsMet() {
      return false
    },
    someOtherConditionIsMet() {
      return true
    },
  },
}
</script>
```

This example would render:

```html
<p>Something Else</p>
```

Notes:

* The bindings for the directives are looked up on the component. You can also do arbitrary JS expressions (eg. `<ul v-if="list.length > 0">`).
* The elements you put the different directives on don't need to be the same, but they should be at the same level of hierarchy
* You can have as many `v-else-if` conditions as you want
* `v-else` doesn't accept any arguments
