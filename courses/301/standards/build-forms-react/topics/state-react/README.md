State in Vue components is held in a property called `data`:

```vue
<template>
  <div v-unless="error">
    <p :class="{ active: isActive}">{{ count }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 1,
      error: null,
      isActive: true
    }
  },
  methods: {
    logState() {
      console.log("The values in state are:", this.count, this.error, this.isActive)
    }
  }
}
</script>
```

Note that `data` is set to a *function* that returns an *object*. This is different than `computed` and `methods`, which are set to objects. This is really easy to forget!

Some notes on state:

* If something never changes, it's not state. Return static values from computed properties instead.
* State in one component may be passed into another component as props
* State values are accessed with `this` in scripts, but don't require the `this` prefix in templates
* Vue doesn't require anything special to set state like in React. You can assign new values directly, but you should only do it within the same component the state is kept in.

## Look Out

Property names in state share the same namespace as computed properties and methods. This will error out:

```vue
<script>
export default {
  data() {
    return {
      message: "",
    }
  },
  computed: {
    message() {},
  },
  methods: {
    message() {},
  }
}
</script>
```
