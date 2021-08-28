# CSS: Shadows and Borders

## Anatomy of a Shadow

Standard CSS shadows use the `box-shadow` property:

(image)

```css
box-shadow: 4px 4px 2px hsl(0, 0%, 50%);
```

* Vertical offset: How far from the top of the element should the shadow start? You can use negative numbers to make the shadow go up instead.
* Horizontal offset: How far from the left side of the element should the shadow start?  You can use negative numbers to make the shadow go left instead.
* Blur radius: Starting from the outside of the shadow, how much of the shadow should be blurry instead of solid?
* Color: What color should the shadow be? 

You can even stack multiple shadows by comma-separating them:

```css
box-shadow: 4px 4px 2px hsl(0, 0%, 50%), -2px -10px 2px hsl(120, 50%, 50%);
```

(image)

## Anatomy of a Border

(image)

* Border thickness
* Border style: Usually `solid`, can also be `dashed` or `dotted`
* Border color

Note that `border` will apply equally to all 4 sides of an element. To only apply a border to some sides, you can `border-top`, `border-right`, `border-bottom`, and `border-left`.

## Watch Out

* The blur radius on `box-shadow` is optional and can be left off for a hard shadow:

```css
box-shadow: 4px 4px hsl(0, 0%, 50%);
```

* You can use any valid color for shadows or borders
* You can make borders less than 1px thick. This can be good for subtlety:

(example)

```css
border: 0.5px solid hsl(0, 50%, 50%);
```
