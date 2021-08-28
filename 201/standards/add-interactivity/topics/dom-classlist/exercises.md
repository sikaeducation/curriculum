Write the implementation for the 3 buttons in this code:

```html
<!doctype html>
<html>
  <head>
    <title>Button Toggling</title>
    <meta charset="utf-8" />
  </head>
  <style>
    .hidden {
      display: none;
    }
  </style>
  <body>
    <h1>Primary Heading</h1>
    <ul class="list-items">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
    <ul>
      <li>
        <button id="all-list-items-toggle">Toggle All List Items</button>
      </li>
      <li>
        <button id="heading-toggle">Toggle Heading</button>
      </li>
      <li>
        <button id="first-list-item-toggle">Toggle the First List Item</button>
      </li>
    </ul>
    <script>
      document
        .querySelector(".all-list-items-toggle")
        .addEventListener("click", () => {
          // Code for all list items toggle here
        })

      document
        .querySelector("#heading-toggle")
        .addEventListener("click", () => {
          // Code for heading toggle here
        })

      document
        .querySelector("#first-list-item-toggle")
        .addEventListener("click", () => {
          // Code for first list item toggle here
        })
    </script>
  </body>
</html>
```
