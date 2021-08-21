Make these two squares overlap so that they create a purple square in the middle:

```html
<!doctype html>
<html>
  <head>
    <title>Overlapping Squares</title>
    <meta charset="utf-8" />
  </head>
  <style>
    .blue, .red {
      width: 100px;
      height: 100px;
    }
    .blue {
      background-color: hsla(240, 50%, 50%, 0.5);
    }
    .red {
      background-color: hsla(0, 50%, 50%, 0.5);
    }
  </style>
  <body>
    <div class="blue">&nbsp;</div>
    <div class="red">&nbsp;</div>
  </body>
</html>
```

---

Put the `×` in the upper-right corner of the `.notification` element:

```html
<!doctype html>
<html>
  <head>
    <title>Upper-Right Corner</title>
    <meta charset="utf-8" />
  </head>
  <style>
    body {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }
    .notification {
      padding: 32px;
    }
  </style>
  <body>
    <div class="notification">
      <i>×</i>
      <p>I'm sorry Dave, I can't do that.</p>
    </div>
  </body>
</html>
```

---

Draw how this will render:

```html
<!doctype html>
<html>
  <head>
    <title>Upper-Right Corner</title>
    <meta charset="utf-8" />
  </head>
  <style>
    .box {
      width: 100px;
      height: 100px;
      border: 1px solid black;
    }
    .middle {
      position: relative;
    }
    .letter {
      position: absolute;
      width: 25px;
      height: 25px;
      bottom: 25px;
      right: 25px;
    }
  </style>
  <body>
    <div class="box">&nbsp;</div>
    <div class="box middle">
      <div class="letter">A</div>
    </div>
    <div class="box">&nbsp;</div>
  </body>
</html>
```
