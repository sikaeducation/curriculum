# React: Events and State

## Lesson Objectives

* Create Vue components that manipulate state with events

## Code Along

1. Start a new Vue app
2. In `App.vue`, create a property in state called `counter` and initialize it to 0
3. Display the `counter` property in the template
4. Add a button to `App.vue`
5. When the button is clicked, increment the `counter` property
6. Move the `counter` property being displayed to a component called `CounterDisplay.vue`
7. Pass the `count` state into `CounterDisplay.vue` as props
8. Move the button into a component called `CounterControl.vue`
9. Bubble the click event from `CounterControl.vue` to `App.vue`
10. Add a `decrement` event to `CounterControl.vue`
