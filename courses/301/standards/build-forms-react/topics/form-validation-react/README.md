Vue doesn't have any built-in validation tools, but here's some helpful patterns:

## HTML5 Validations

The [existing HTML5 validations](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation) will take you a long way:

```vue
<template>
  <form>
    <input type="text" min="5" max="20" required />
    <input type="email" min="5" max="20" />
    <input type="color" />
    <input type="text" pattern="/^pre(\w)+?!$" />
  </form>
</template>
```

Inputs that pass validation will have a `:valid` CSS pseudoclass, and inputs that don't pass validation will have an `:invalid` CSS pseudoclass. Forms can't be submitted while HTML5 validations are failing.

## Putting Errors in an Array

```vue
<template>
  <form @submit.prevent="submitEmail">
    <ul v-if="errors.length > 0">
      <li v-for="error in errors" :key="error">{{ error }}</li>
    </ul>
    <input type="email" v-model="email" />
    <input type="submit" value="Submit" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      errors: [],
      email: "",
    }
  },
  methods: {
    submitEmail() {
      this.errors = []

      if (!this.email.match(/mycompany.com$/)){
        errors.push("Email address must be from mycompany.com")
      }

      if (this.errors.length === 0){
        // Submit form
      }
    },
  },
}
</script>
```

## Real-time Validations

You can also do validations in real-time:

```vue
<template>
  <form @submit.prevent="submitEmail">
    <input :class="{ isValid }" type="txt" v-model="tweet" />
    <input type="submit" value="Submit" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      tweet: "",
    }
  },
  methods: {
    submitEmail() {
      if (this.isValid){
        // Submit form
      }
    },
  },
  computed: {
    isValid() {
      return tweet.length < 255
    },
  },
}
</script>
```
