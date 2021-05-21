This is an example of handling a form submission in Vue:

```vue
<template>
  <p v-if="!result">{{ result }}</p>
  <form v-else @submit.prevent="search">
    <label for="search-term">Search Term</label>
    <input id="search-term" v-model="searchTerm" />

    <input type="submit" value="Search!" />
    <p class="error" v-if="errorMessage">{{ errorMessage }}</p>
  </form>
</template>

<script>
export default {
  data() {
    return {
      errorMessage: "",
      searchTerm: "",
      result: ""
    }
  },
  methods: {
    search(){
      this.error = ""
      const body = {
        search_term: this.searchTerm,
      }

      post("http://search-url.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }).then(response => response.json())
      .then(response => {
        this.result = response.result
      }).catch(error => {
        this.errorMessage = error.message
      })
    },
  },
}
</script>
```

## Parts of a Form Submission

### Attaching Event Handler

```vue
<form @submit.prevent="methodToHandleSubmissionEvent">
```

The browser will try to handle the HTML form submission on its own, so we need to call `event.preventDefault()` to keep that from happening. The `.prevent` syntax will do that automatically.

Also, make sure you handle form submission with the `@submit` event on the form, not the `@click` event of the submit button.

The value of the attribute is the name of the method you want to fire when a submission occurs.

### Getting the Form Data

While you can get the form data manually with `event.target`, it's more Vue-like to ignore the DOM and pull the data directly out of the bindings:

```vue
<script>
export default {
  data() {
    return {
      searchTerm: "",
      sortOrder: "ASC",
    }
  },
  props: {
    userId: Number,
  },
  methods: {
    search(){
      const body = {
        search_term: this.searchTerm,
        sort_order: this.sortOrder,
        user_id: this.userId,
      }
    },
  },
}
</script>
```

### Make the request

Vue is indifferent to how this is done. You can use native `fetch`, `axios`, or the HTTP library of your choice:

```js
post("http://search-url.com", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ some_key: this.someValue }),
}).then(response => response.json())
```

### Handle Errors

Lastly, handle errors. Any HTTP connection can fail for reasons outside your control; you want to control what your application will do when it does. It's common to have a field that shows up if an error is present, and is reset on subsequent retries:

```vue
<template>
  <p class="error" v-if="errorMessage">{{ errorMessage }}</p>
</template>

<script>
export default {
  data() {
    return {
      errorMessage: "",
    }
  },
  methods: {
    search(){
      this.errorMessage = ""

      post("something-that-fails.com")
        .catch(error => {
          this.errorMessage = error.message
        })
    },
  },
}
</script>
```
