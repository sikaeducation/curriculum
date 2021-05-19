# CSS Web Fonts

There are very small number of typefaces that are reliably available on just about every computer. They are:

* Sans-Serif: Arial (Windows) / Helvetica (MacOS + Linux)
* Serif: Times New Roman (Windows) / Times (MacOS + Linux)
* Monospace: Courier New (Windows) / Courier (MacOS + Linux)

Unfortunately, only using these will leave a site looking very plain. How can we tap into the thousands of available typefaces?

## `@import`

The `@import` directive in CSS allows us to import external stylesheets and files. In this case, font files:

```css
@import url('https://font-url.com/goes-here/font.ttf);
```

Once the font has imported, it can be safely used in `font-family` rules.

## Google Fonts

One of the most popular sources of free, high-quality fonts is [Google Fonts](https://fonts.google.com). There are over 1000 typefaces available, some of which are near-copies of very famous typefaces that you would otherwise have to purchase a license to use. To use Google Fonts:

1. Use the filters to narrow the kind of type you're looking for
2. Click on the card for the typeface
3. Select all the fonts for that typeface you want to use
4. In the "Selected family" pane, switch the radio button to `@import`
5. Copy the `@import` statement between the style tags and add to the top of your CSS file
6. Copy the `font-family` rule and add it to the appropriate selector in your stylesheet

### Tips

1. The most useful typefaces often have many fonts. You can take advantage of this by using the "Font Properties" search filter and narrowing the list down to typefaces with 12+_ "Number of styles".
2. Every font you add gives you more options for weight and style, but also slows down your page load. 400, 400 italic, and 700 will give you regular, italic, and bold fonts and is a good starting place. Experiment with other weights, and don't include fonts that you're not using on the page!
3. You can customize the examples with your own prompt. This is especially useful for seeing options for headings and logos.
4. There's no limit to how many typefaces you can use on one page, but you're probably better off sticking with one to start with, and there's rarely a reason to use more than two on the same page (excepting logos and other display type). The "Pairings" tab on the page for each typeface can give you some suggestions for a second typeface that matches well. It's common to use one for headings, and another for body text.

## Adobe Fonts

[Adobe Fonts](https://fonts.adobe.com/) (formerly TypeKit) is another option for sourcing web fonts. Adobe Fonts aren't free, but licenses are included with any Adobe Creative Cloud subscription. Adobe Fonts has over 2000 typefaces available, many of which are more distinctive than the ones available with Google Fonts.

## Other Sources For Fonts

You can also purchase licenses for fonts directly from stores like [MyFonts](https://www.myfonts.com/), [FontShop](https://www.fontshop.com/), and [Creative Market](https://creativemarket.com/fonts), and [The Designer's Foundry](https://thedesignersfoundry.com/). You can also purchase them directly from type foundries, like [Hoeffler & Co.](https://www.typography.com/) and [Colophon](https://www.colophon-foundry.org/). Note that you may have to find a way to host the font files yourself.

## Watch Out!

* Note that any request on the internet can fail, so you'll still want to use fallback fonts
* Watch the syntax on the `@import` statement very carefully. Wrap the URL for the font in `url()`, put the URL in single quotes, and end the directive with a `;`.

## History

Before web fonts were widely supported in browsers, web designers were stuck with Arial/Helvetica/Times New Roman/Times/Courier New/Courier. These were referred to as "web-safe fonts", and are one of the main factors behind the distinctive look of old websites.
