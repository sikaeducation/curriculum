# Album Previewer

You're working for the "Next Step Records" record label, and your job is to make a site that displays information about albums the label puts out and plays samples of the tracks. The overall site layout and styling is already done, you need to add the interactivity to it.

The list of albums should display on the `index.html` page, and any individual album should display on the `album.html` page. There is no need to alter any of the HTML/CSS files or create any new files.

The `index.html` and `album.html` pages each have corresponding `index.js` and `album.js` files that have already been linked. Additionally, all the album data has already been loaded into a variable called `albums` for both JavaScript files.

The music files are all in the `site/assets/tracks` directory, and the album covers are all in the `site/assets/cover-images` directory.

The elements you dynamically create should look like this:

```html
<!-- For the album listing -->
<a class="album" href="album.html?album=album-id-goes-here">
  <img src="cover-image-goes-here.jpg" alt="Cover of album title" />
  <p>Artist Name Goes Here - Album Title Goes Here</p>
</a>
```

```html
<!-- For the track listing -->
<div class="track-listing" data-track-id="track-id-goes-here">
  Song title goes here
</div>
```

```html
<!-- For the pause button -->
<button><i class="fas fa-pause"></i></button>
```

## User Stories

1. List albums
  * Given that a listener is on the home page
  * Then a list of albums is shown
2. List the tracks on one album
  * Given that a listener is on the home page
  * When an album is clicked
  * Then details about that album are shown
3. Play a single track from the album
  * Given that a listener is on an album page
  * When the play button is clicked
  * Then a featured track starts playing
4. Play any track from the album
  * Given that a listener is on an album page
  * When a track is clicked
  * Then that track begins playing
4. Pause the media player from a keyboard
  * Given that a track is playing
  * When the spacebar key is pressed
  * Then that track pauses
  * And the play button becomes a pause button
5. Play the media player from a keyboard
  * Given that a track is paused
  * When the spacebar key is pressed
  * Then that track plays
  * And the pause button becomes a play button

## Definition of Done

* The JavaScript should pass the [Standard](https://standardjs.com/) JS linter with no errors or warnings

## Rubric

### Attention to detail

* [ ] - Reasonable commit history
* [ ] - Albums are listed on the page
* [ ] - You can navigate to individual albums
* [ ] - You can play a track on an individual album page
* [ ] - You can play any track on an individual album page
* [ ] - It has a custom play/pause button
* [ ] - You can press spacebar to play/pause
* [ ] - Playing and pausing causes the play/pause icon to change appropriately

### Code Quality

* [ ] - Passes Standard linting with no errors or warnings
* [ ] - No useless code
* [ ] - Errors are handled

## Attribution

Music courtesy of [Bensound](bensound.com)
