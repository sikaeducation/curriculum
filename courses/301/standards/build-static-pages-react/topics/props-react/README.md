Props are variables on a parent component that you want to make available on a child component. You can pass in simple values (like strings and booleans), complex values (like objects), and even functions.

```vue
// ParentComponent.vue
<template>
  <ChildComponent
    :someProp="someState"                 <!-- Name on the left is what the prop will be called in the child -->
    :someOtherProp="someComputedProperty" <!-- Name on the right is what it's called in the parent -->
    :yetAnotherProp="someMethod"
  />
</template>

<script>
import ChildComponent from "@/components/ChildComponent"

export default {
  name: "ParentComponent",
  components: {
    ChildComponent,
  },
  data() {
    return { someState: "Hi!" }
  },
  computed: {
    someComputedProperty() {
      return "Yo!"
    },
  },
  methods: {
    someMethod() {
      return "Oi!"
    },
  },
}
</script>
```

```vue
// ChildComponent.vue
<template>
  <p>{{ someProp }}</p>
  <p>{{ someOtherProp }}</p>
  <p>{{ resultOfYetAnotherProp }}</p>
</template>

<script>
export default {
  name: "ChildComponent",
  props: {
    someProp: String,
    someOtherProp: String,
    yetAnotherProp: Function,
  },
  computed: {
    resultOfYetAnotherProp() {
      return this.yetAnotherProp()
    },
  },
}
</script>
```

There are two legal syntaxes for passing dynamic props into a component:

```vue
<SomeComponent v-bind:someProp="someState" />
<SomeComponent :someProp="someState" />
```

There is no difference between them, and you should always use the shorter syntax.

The `:` syntax is always looking on the component for state, props, computed properties, methods, or arbitrary JS expressions. If you leave it off, you can pass in simple static values:

```vue
<SomeComponent :someProp="someState" />     <!-- Looks for this.someState on the component -->
<SomeComponent :someProp="{ someState }" /> <!-- Passes in the object { someState: this.someState } -->
<SomeComponent someProp="someState" />      <!-- Passes in the string "someState" -->
```

## Common Patterns

### Aliasing Long Property Lookups

You can use a computed property to make an abstraction for a deeply nested property, which can destructure out properties from props and make the rest of the code easier to read.

```vue
<script>
export default {
  props: {
    someObject: Object,
  },
  computed: {
    someProperty() {
      return this.someObject.someDeep.nested.property
    },
  },
}
</script>
```

### Prop Drilling

Props can be props! You can keep passing components down your hierarchy, which is called "prop drilling":

```vue
// OuterComponent.vue
<template>
  <MiddleComponent someProp="Hi!" />
</template>

// MiddleComponent.vue
<template>
  <InnerComponent :someProp="someProp" />
</template>

// InnerComponent.vue
<template>
  <p>{{ someProp }}</p> <!-- "Hi! -->
</template>
```

## Look Out

Some common mistakes with props:

### Saving Props in State

There's no need to save props into state:

```vue
<script>
export default {
  props: {
    someProp: String,
  }
  data() {
    return {
      someState: this.someProp // Don't do this!
    }
  },
}
</script>
```

### Mutating Props

Use your props, but never modify them. Change them at their source by bubbling up events. You can also make derivative properties with computed properties.

```vue
<script>
export default {
  props: {
    someProp: String,
  },
  methods: {
    mutateSomeProp() {
      this.someProp = "Some other string" // Don't do this!
      this.$emit("updateSomeProp", "Some other string") // Do this instead
    },
  },
}
</script>
```

## Exercises

* What's the difference between `:someProp="someState"` and `someProp="someState"`?
* What's the difference between `:someProp="someState"` and `v-bind:someProp="someState"`?
* What kinds of types can you pass into a prop?
* Build 3 components that take static and dynamic props

## Resources

* [Official Vue docs on Props](https://v3.vuejs.org/guide/component-props.html#passing-static-or-dynamic-props)
