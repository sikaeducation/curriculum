# Intro to SPA State Management

For many types of data, it makes sense to pass the data through a hierarchy of components. For example, a `<Product />` component might accept a `product` object. That `<Product />` component can then continue passing that object or parts of it down through the hierarchy. This may include components that display the name of the product and other attributes, display reviews and related products, and so on. There also types of data that are owned by the app itself, including:

* The currently logged in user
* Authorization tokens from servers
* The display theme
* A music player that can be controlled from multiple parts of the app
* Currently configured options
* Modal dialogs

It doesn't make sense to think of this data in terms of which component should own the state. Rather, think of it as state that is owned by the application, or application state. Different SPA libraries and frameworks have different tools for handling application state:

* **React**: Context, Redux
* **Vue**: Vuex
* **Angular, Ember**: Service objects

All of them follow a similar pattern: Bypass the component hierarchy to make application state available in any component that needs it. This application state isn't part of any one component and could reasonably be used in many places.

## Additional Resources

| Resource | Description |
| --- | --- |
| [Managing State in an SPA](https://medium.com/@szpytfire/managing-state-in-an-spa-9a375c353c4e) | Blog post on SPA state management |
