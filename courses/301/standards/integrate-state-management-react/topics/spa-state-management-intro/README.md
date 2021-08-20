# Intro to SPA State Management

For many types of data, it makes sense to pass the data through a hierarchy of components. For example, a component that displays details about a product might accept a `product` object, and then continue passing that object (in whole or in part) down through components that display the name of the product and other attributes, display reviews and related products, and so on. This is called prop-drilling.

There are other types of data that are owned by the app itself. These include:

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

All of them follow a similar pattern: Bypass the component hierarchy to make application state available in any component that needs it. These don't make sense to think of as part of the component hierarchy and they could reasonably be used just about anywhere. These are application state. For these, use React Context.
