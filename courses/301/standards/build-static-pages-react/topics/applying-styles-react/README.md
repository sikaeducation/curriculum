Classes can be bound to components with a special syntax:

```vue
<template>
  <p :class="{ "this-class-shows-up": ifThisIsTruthy }">
    Hi
  </p>
</template>

<script>
export default {
  computed: {
    ifThisIsTruthy() {
      return true
    }
  },
}
</script>

<style>
.this-class-shows-up {
  color: red;
}
</style>
```

The thing that's bound to the `style` attribute is just a regular key/value object, and you can also supply that object through something like a computed property if it helps clean up the syntax.

You do static and dynamic class bindings at the same time:

```vue
<SomeComponent class="this-will-always-be-here" :class="{ thisMightNotBe: someState }"
```

You can also do ternary expressions inside of arrays to toggle between two classes:

```vue
<SomeComponent :class="[ ifThisIsTruthy ? 'this-class-will-there' : 'otherwise-this-will' ]"
```

## Exercises

* Bind a class to state
* Toggle between two classes using a class biding

## Resources

* [Official Vue docs on style bindings](https://v3.vuejs.org/guide/class-and-style.html#class-and-style-bindings)
