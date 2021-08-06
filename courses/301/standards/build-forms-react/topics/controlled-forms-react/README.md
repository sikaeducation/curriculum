[Official Vue docs on 2-way binding](https://v3.vuejs.org/guide/forms.html)

Most props in Vue are bound in one direction only- a change in the source is reflected in the destination:

```vue
<template>
  <p>{{ counter }}</p>
  <button @click="() => data += 1">Increment</button>
</template>

<script>
export default {
  data() {
    return {
      counter: 1
    }
  }
}
</script>
```

Any time `counter` is changed, the value in the `<p>` tag updates and that's the single source of truth for what the counter currently is.

With form inputs however, we usually want the binding to go both ways: A change in the state is reflected in the input, *and* a change in the input is reflected in state. In Vue, we do this with the `v-model` property:

```vue
<template>
  <form>
    <input v-model="searchTerm" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: ""
    }
  }
}
</script>
```

Now, the state can be changed from either direction. This is a shorthand for binding the value of the input to state and updating the state on the `change` event.

## 2-way Binding On Components

You *can* use `v-model` on components (not just HTML elements), but it's a little trickier:

```vue
// SomeComponent.vue
<template>
  <form>
    <MyCoolCustomInput v-model:searchTerm="searchTerm" />
  </form>
</template>

<script>
import MyCoolCustomInput from '@/components/MyCoolCustomInput';

export default {
  components: {
    MyCoolCustomInput,
  },
  data() {
    return {
      searchTerm: ""
    }
  }
}
</script>

// MyCoolCustomInput.vue
<template>
  <form>
    <input :value="searchTerm" @input="$emit('update:searchTerm', $event.target.value)" />
  </form>
</template>

<script>
export default {
  props: {
    searchTerm: ""
  }
}
</script>
```

Watch the syntax on that *very* carefully. Some notes:

* `v-model:searchTerm="searchTerm"` - The first `searchTerm` is what the prop will be called in the child component, the second is what it's called in the parent
* The binding on the child component is *1-way*. Bind the value of the HTML element on the child component to whatever you named the prop.
* Fire an event when the child component changes in the format `update:propName`. `v-model` will listen for this change automatically.
* Pass the updated value into the event. You can access this on `<input />` elements with `$event.target.value`.
