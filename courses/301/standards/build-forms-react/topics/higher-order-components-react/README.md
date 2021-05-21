Slots are a way to wrap components around elements or other components:

```vue
<template>
  <ListWrapper>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </ListWrapper>
</template>
```

They're mainly useful for applying a base style to a variety of more specific components and/or keeping an outer scope available to an inner scope.

## Base Styles

```vue
// BaseButton.vue
<template>
  <span class="base-button">
    <slot></slot>
  </span>
</template>

<style>
.base-button > button {
  background-color: hsl(240, 50%, 50%);
  color: hsl(0, 0%, 100%);
  padding: 12px 24px;
}
</style>

// SuccessButton.vue
<template>
  <BaseButton class="success-button">
    <button :someProp="dataInScopeForSuccessButton" @click="methodInScopeForSuccessButton">Add</button>
  </BaseButton>
</template>

<style>
.success-button {
  background-color: hsl(120, 50%, 50%);
}
</style>
```

The `<slot></slot>` will be replaced by whatever you pass into it.
