# HTML: Form Inputs

A form is a way to collect user input. What kinds of user input can you collect?

## `name` and `value`

The most important attributes of any type of form input are the `name` and `value` attributes. When a form is submitted, the data from the form will show up as key-value pairs. The `name` attribute determines the key, and what a use enters or selects will be the value. This HTML form:

```html
<form>
  <input type="text" name="full-name" value="Steve Gadd" />

  <select name="occupation">
    <option value="guitarist">Guitarist</option>
    <option value="drummer" selected>Drummer</option>
    <option value="trumpeter">Trumpeter</option>
  </select>
</form>
```

Will generate this data:

```js
{
  "full-name": "Steve Gadd",
  "occupation": "drummer"
}
```

## Labels

All inputs in a form should be described with `<label>`s, for both accessibility and general user experience.

```html
<form>
  <label for="first-name">Please enter your first name to get started:</label>
  <input type="text" name="first-name" id="first-name" />
</form>
```

A `<label>`'s `for` attribute should match an input's `id` attribute. This will both help assistive technologies navigate the form, as well as making an interaction with the label focus the correct input.

(gif here)

## `required`

To indicate that a form input is required for submission, add the attribute `required` to the element:

```html
<form>
  <input type="checkbox" id="acceptance" name="acceptance" required />
  <label>Do you accept the terms and conditions?</label>

  <input type="submit" value="Sign Me Up!" />
</form>
```

This will prevent the browser from submitting the form until the input has a value.

## Inputs

These are some common HTML inputs types:

* `text` - Collect short-form text
* `search` - ?
* `email` - Checks that the text input is a valid email address
* `url` - Checks that the text input is a valid URL
* `number` - Collects a number
* `range` - Collects a lower bound and an upper bounder
* `date` - Select a date from a calendar
* `time` - Select a time
* `month` - Select a month from a calendar
* `color` - Select a color from a pallette (outputs the hex code for that color)

Note that you can add placeholder text to an input box to hint at the kind of content expected by adding a `placeholder` attribute:

```html
<form>
  <label for="full-name">Please enter your full name</label>
  <input type="text" id="full-name" name="full-name" placeholder="Eg. Miles Dewey Davis III, Sergio Santos Mendes" />
</form>
```

You can also add several attributes that constrain or validate input with attributes like `min`, `max`, and `pattern`.

## Dropdowns

A user can select one item from a list of predefined choices with the `<select>` and `<option>` tags.

```html
<select name="service-level">
  <option value="standard">Standard</option>
  <option value="twoday">2 day</option>
  <option value="overnight">Overnight</option>
</select>
```

When the form is submitted, the key will be the `name` of the `<select>` (`service-level` in this example), the value will be the `value` of whichever option was selected.

You can also give an option a `disabled` attribute to make it unselectable (good for group labels), and you can give something the `selected` attribute to preselect it:

```html
<select name="service-level">
  <optgroup>
    <option disabled>This is free</option>
    <option value="standard" selected>Standard</option>
  </optgroup>
  <optgroup>
    <option disabled>These cost extra</option>
    <option value="twoday">2 day</option>
    <option value="overnight">Overnight</option>
  </optgroup>
</select>
```

Note that you can also group related options in a select together with `<optgroup>`.

## Radio Buttons

A radio button is also a way for a user to select one option from many, like a dropdown. It's frequently used when there are fewer options to choose from. A radio button is an `<input />` with a `type` of `radio` that shares a `name` with other `<input />`s:

```html
<form>
  <input type="radio" id="under-18" name="age" value="<18" />
  <label for="under-18">Under 18</label>
  <input type="radio" id="18-39" name="age" value="18-39" />
  <label for="18-39">18-39</label>
  <input type="radio" id="over-40" name="age" value=">40" />
  <label for="over-40">Over 40</label>
</form>
```

Note that:

* All 3 options have the same `name`
* The `value` attribute should be preset with what the value of this key/value pair should be if this option is selected
* The `<label>` is what the user will actually see on the screen and tells them what the option does if they select it

## Multiselect

A multiselect is like a dropdown, except it allows users to select more than one option:

```html
<select name="toppings" multiple>
  <option value="cheese" selected>Cheese</option>
  <option value="pepperoni">Pepperoni</option>
  <option value="black-olives">Black Olives</option>
  <option value="sausage">Sausage</option>
  <option value="green-peppers">Green Peppers</option>
  <option value="mushrooms">Mushrooms</option>
  <option value="anchovies">Anchovies</option>
</select>
```

The only thing this requires is adding the `multiple` attribute to the `<select>` tag.

## Checkboxes

A checkbox is a type of multiselect, and is frequently used if there are fewer than 7 options.

```html
<form>
  <input type="checkbox" name="terms-and-conditions" id="terms-and-conditions" />
  <label for="terms-and-conditions">Do you accept the terms and conditions?</label>

  <input type="checkbox" name="email-list" id="email-list" />
  <label for="email-list">Would you like to join our email list?</label>
</form>
```

## `textarea`

HTML `<input />` tags are for short-form text, like names, email addresses, and urls. For longer-form text (like blog posts, comments, and feedback fields), use `<textarea>`:

```html
<form>
  <label for="email">Email Address</label>
  <input id="email" type="email" name="email" />

  <label for="message">What would you like to tell us?</label>
  <textarea id="message"></textarea>
</form>
```

## Watch Out!

* `<input />` is a self-closing tag, but `<textarea>` is not.
* A label's `for` attribute will match a form input's `id` attribute, not its `name`.
