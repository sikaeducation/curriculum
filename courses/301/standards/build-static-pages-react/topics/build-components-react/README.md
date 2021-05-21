A component needs 3 things:

* Name
* File
* Registration

## Names

Vue component names follow a set of rules:

### Components should be multiple words

To ensure compatibility with the web component spec, your component name should be at least two words.

### No snake_case, no camelCase

There are no circumstances where snake_case or camelCase are appropriate for components.

### Variables are PascalCase

Within a script, components should always be written in PascalCase, like this:

```vue
import SomeComponent from "./SomeComponent"

export default {
  components: {
    SomeComponent,
  },
}
```

### File names are either PascalCase or kebab-case

PascalCase is more common due to ease of code completion and because it mirrors the variable usage, but either are acceptable:

```
SomeComponent.vue
some-component.vue
```

### Template names are PascalCase with build tools, kebab-case otherwise

If you're using Vue CLI or webpack, use PascalCase in your templates:

```vue
<SomeComponent />
```

If you're not using a build tool, you'll need to use kebab-case:

```vue
<some-component />
```

### No Abbrevs

Write out the entire word, every time.

### Names go general-to-specific

Instead of `TextFormInput`, name it `FormInputText`. This helps with alphabetization in file directories.

### Use `App` and `Base` as Prefixes

* `App` - Indicates that there should only be one instance of something in the app, such as `AppHeader` and `AppSidebar`
* `Base` - Indicates that something is providing some base functionality or styling and intended to be extended, such as `BaseInput` and `BaseButton`

## File

There are no rules about where files must go, but it's common to separate them into a `views` and `components` folder. There is no technical difference between these, but semantically a view is something that is routed directly to, and a component is anything else. You can nest folders inside of these as needed.

## Registration

In a Vue CLI app, components are registered within a router or directly within the component hierarchy:

```vue
<script>
import SomeComponent from "./SomeComponent"
import SomeOtherComponent from "./SomeComponent"

export default {
  name: "App",
  components: {
    SomeComponent,
    SomeOtherComponent,
  },
}
</script>
```

In an app without a build process, components are registered globally:

```vue
const SomeComponent = {
  template: "<p>Hi!</p>",
}
const SomeOtherComponent = {
  template: "<p>Yo!</p>",
}
const App = {
  template: "<div><some-component /><some-other-component /></div>", // Will look up the registration on render
}

const app = Vue.createApp(App) // Bootstraps the app
app.component('some-component', SomeComponent) // Registers the component
app.component('some-other-component', SomeOtherComponent) // Registers the component
app.mount('#app') // Renders the app inside of a DOM element with the ID "app"
```

## Exercises

Which of these are valid component names?

* `<CartItem />`
* `<Item />`
* `tab.vue`
* `<cart-item-heading />`
* `<cartItemDisabled />`
* `<AppSidebar />`
* `import BlogPost from "BlogPost";`
* `<StarRating />`
* `user-addr.vue`
* `<comments />`

## Resources

* [Official Vue style guide](https://v3.vuejs.org/style-guide/)
