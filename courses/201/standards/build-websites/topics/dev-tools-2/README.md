# Dev Tools 2

After the element inspector and the network inspector, the next most important part of the browser dev tools is the style editor.

## Editing Styles

Styles can be added and edited for any selector, or for specific elements. If you edit a rule for a selector, it will also apply for every other element that uses that same rule:

![Changing a class in a stylesheet](assets/dev-tools-1.gif)

You can also apply it exclusively to that element:

![Changing an element in a stylesheet](assets/dev-tools-2.gif)

As a bonus, if you've made an edit you want to permanently apply, you can copy/paste the rule into your stylesheet by highlighting the rule in the dev tools, and copy/pasting it to your text editor.

## Editing Helpers

When you're editing a numeric value, you can use the up and down arrow keys to adjust them. This is especially useful for visually aligning elements.

![Changing an element in a stylesheet](assets/dev-tools-4.gif)

When editing a color value, you can use the built-in color picker to change the value.

![Changing an element in a stylesheet](assets/dev-tools-3.gif)

Each style rule has a checkbox next to it that can be used to turn it on and off.

![Changing an element in a stylesheet](assets/dev-tools-5.gif)

Each style rule has an autocomplete that shows you all the legal values for a property.

![Changing an element in a stylesheet](assets/dev-tools-6.gif)


## Editing Warnings

Any rules you write that have invalid syntax will be indicated in the style editor:

![Changing an element in a stylesheet](assets/dev-tools-7.gif)

This is 

## Box Model

One of the most useful parts of the style editor is being able to see which box model properties have been set, and what they're currently rendering as:

(example)
![Changing an element in a stylesheet](assets/dev-tools-8.gif)
