# Dev Tools

You wrote your code and you can serve it to your browser. What do you do when something goes wrong? Open up the browser's developer tools.

<figure>
  ![Using Firefox dev tools to inspect a page](assets/dev-tools-1.png)
  <figcaption>Dev tools in Firefox</figcaption>
</figure>

<figure>
  ![Using Chrome dev tools to inspect a page](assets/dev-tools-2.png)
  <figcaption>Dev tools in Chrome</figcaption>
</figure>

## Keyboard shortcut

Dev tools are a minute-by-minute part of the web development process, so it's something you want to be able to open and close quickly. Memorize the keyboard shortcut for opening it, you'll use it often.

* MacOS: `Command` + `Shift` + `i`
* Other Operating Systems: `Control` + `Shift` + `i`

## Element Inspector

One of the most useful items in the dev tools is the element inspector. There are a few different ways it can be used:

* If you right-click on something like text or an image on a web page and select "Inspect Element", it will open the dev tools to the Element Inspector (if it's not open already) and highlight the HTML element it comes from
* This works in reverse as well. If you hover your cursor over an element in the Element Inspector, it will highlight the item on the page it corresponds to
* When the Dev Tools are already open, you can click this icon to select items from the page:

Some things you can do with the element inspector:

* See where (or whether) an element is being rendered
* Temporarily change the content of an element, its tag name, or any of its attributes (they will all change back when the page is refreshed). Do this by double-clicking in the relevant place on the element

![Inspecting network requests](assets/dev-tools-4.png)

* See how the browser interpretted the HTML you wrote. What you see in the Element Inspector isn't necessarily what you wrote. If you didn't close tags correctly or otherwise wrote invalid HTML, the browser will make an effort to correct it. The HTML in the Element Inspector represents the browser's interpretation.

## Network Inspector

Another very useful tool is the Network Inspector. This tab shows all network requests your browser made for HTML files, stylesheets, scripts, images, and more. This is useful for seeing whether any of those requests succeeded or failed, what the request looked like, and what the response looked like.

![Inspecting network requests](assets/dev-tools-3.png)

## Watch Out!

* It's common for browser plugins to add elements to the HTML you see in the Element Inspector
* The Network Inspector can get very "noisy" when a page is loading. You can use the filters to only look at the type of request you're interested in. It's very easy to forget to reset this too!
* There are minor differences between the dev tools available in different browsers and the tools are regularly updated, so some of the terms and images may be different on your computer.
