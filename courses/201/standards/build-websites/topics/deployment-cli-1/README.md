# Deployment: CLI 1

## Why?

No matter how great your site is, it doesn't won't matter much if the files are only on your computer. That means we need to be able to "deploy" our work to the public internet so someone else can get them.

## Example

These files are on my computer, but no one else can see them:

(image, localhost URL)

But once I've deployed the app:

(image, public URL)

## What's Going On

There are a few different deployment providers, but one of the easiest to get started with is Vercel's Now. Once you've installed it, running `now` in your terminal will send all of the files in that folder to Vercel's computers, and they'll give you a URL that you can access it at.

(Image: Step 1)
(Image: Step 2)
(Image: Step 3)

Some similar services:

* Surge

## Gotchas

* When you go to a URL, unless you specify otherwise, the server will look for a file called `index.html`. If you don't have one of these, going to the URL will throw an error.
* You need to be in the same directory as your files when you deploy.

## History

Originally, to get something on the internet you needed an IP address, a computer connected at that IP address, you needed to listen to requests and send the appropriate files back as the requests came in. Now, this is commodity work. With one command, we can send our files to computers that other people maintain, and they'll give us a URL where the files can be retrieved. This is all part of a larger pattern of "cloud computing" where operations that used to require a lot of technical expertise become commodities.
