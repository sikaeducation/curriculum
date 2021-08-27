# How to Componentize Static HTML

You use this process with any site with existing HTML and CSS.

## Setup

1. Copy all HTML into a top-level component

## Until all components have been broken out:

### Move HTML into Component

1. Starting at the top, find the most nested piece that can be a component
  * It may be one of many, such a list items; only do one at a time
2. Create a new file for the component
3. Copy all of the content of the original component file into the new file
4. In the new component file, starting at the top and working to the bottom:
  * Delete any irrelevant HTML
  * Delete any unneeded imports
  * Change the paths of any imports if needed
  * Change the name of the component
  * Declare any dependent data as props
  * Delete any irrelevant CSS
  * Delete any CSS you keep from the new component file
5. In the original component file:
  * Import the new component
  * Add it to the component list
  * Replace the old template HTML with the new component declaration
    * If there are any existing data dependencies, pass them in as props
  * Delete any unused imports or components that were copied to the new component file

### Make Component Dynamic

Loop: Until all data has been parameterized

1. Starting at the top, find the first piece of hard-coded data that needs to be parameterized
2. Add a prop to the component
3. Replace the hard-coded data in the template with the prop
4. Move the hard-coded data to a hard-coded prop
5. Replace the hard-coded prop with a dynamic value
  * If the component is one of many (eg. a list), have the dynamic only return *one* item until you are ready to implement the whole list
6. Implement any necessary data processing on the component

## Componentizing The Rest Of The List

After you've already done one item in a list:

1. Extract the data from all the individual items into a computed property that returns an array of data, then iterate through the list.
2. If the component has the same functionality as the one you've done, replace all HTML with instances of the component, passing in props or adding event listeners as needed

## Refactoring Similar Components

If the component you're reusing has slightly different functionality as one you've done:

1. Make a new component for the new use case
2. Copy all of the code from the old component to the new component
3. Add any new functionality needed in the new component
4. Look at the difference between the old component and and the new one, and refactor them into one component:
  * Use conditionals for things that aren't always present
  * Consider consolidating shared elements into a base component that's extended by child components
