Data can be passed from a parent component to a child component, and whenever the data changes in the parent it will rerender the child.

```vue
// ParentComponent.vue

<template>
  <ChildComponent :someProp="someState" />
  <Button @click="() => someState += 1"> Increment</Button>
</template>

<script>
import ChildComponent from "./ChildComponent"

export default {
  components: {
    ChildComponent,
  },
  data() {
    return {
      someState: 1,
    }
  },
}
</script>

// ChildComponent.vue
<template>
  <p>{{ someProp }}</p>
</template>

<script>
export default {
  props: {
    someProp: Number,
  },
}
</script>
```

## Look Out!

It's called 1-way binding for a reason! In the example above, pressing the button changes the state, and that state change is reflected down through the props. We can't also have a button in the child that changes the state in the parent. If a child component needs to change state in its parent, it needs to do it through events. State changes need to happen in the same place the state is held.

## Exercises

1. Make a component that keeps track of a count in state
2. Add a button that increments the counter
3. Make a second component that will display the current count
4. Pass the current count into the count display as a prop

## References

* [Official Vue Docs on Props](https://v3.vuejs.org/guide/component-props.html)
