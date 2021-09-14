# Introduction to Git

Git is a tool for keeping track of different versions of files. Git helps you:

* Make save points in your projects that you can go back to
* Experiment with ideas in branches, discard them if they don't work, and then merge them in with the rest of the code if they do
* Enable multiple people (potentially thousands) working on the same files at the same time

It's like having a supercharged undo/redo for files, instead of just the contents of files.

## Git By Example

You're working on a project, and you make some files:

```bash
touch index.html index.css index.js
```

You decide to version control them with Git, so you initialize a repository, add your files to it, and make a commit:

```bash
git init
git add index.html index.css index.js
git commit -m "Initial commit"
```

A commit is like a save point for your project. You add some content to the HTML file, tell Git to add the change, and make another commit:

```bash
code index.html # Make some changes...
git add index.html
git commit -m "Add boilerplate content to index.html"
```

Then you add some styles to it:

```bash
code index.css
git add index.css
git commit -m "Add styles to index.html"
```

You're not crazy about these styles so you undo the last commit:

```bash
git reset --hard HEAD~1
```

Now your code has the changes you've made to the HTML but not the changes you made to the CSS. It's like you ran undo on your previous change.

## Git Is Complicated

Git is a really powerful tool that can do much more than this example. Unfortunately, even beginner Git tutorials can get intimidating very quickly. It's OK to just memorize a couple of Git commands to get started. It's not necessary to have a clear mental model of how Git works to use it and you can always go deeper later.

## Git Is Not GitHub

[Git](https://git-scm.com/) is a open-source command-line tool that keeps track of different versions of your files. You can even use it on personal files and documents that never leave your computer. It's near-ubiquitous today, but its most prominent alternative is [Mercurial](https://www.mercurial-scm.org/). Git largely replaced [SVN](https://subversion.apache.org/), which was previously the most common version control system.

GitHub is a commercial product by Microsoft that stores Git repositories, manages access to them, and offers a suite of tools for enabling efficient collaboration on them. Its major competitors are [SalesForce](https://www.salesforce.com/)'s [Bitbucket](https://bitbucket.org/) and [GitLab](https://about.gitlab.com/).

You'll work with both tools, but even early on it's important to distinguish between them.

## Trivia

The [first commit](https://github.com/git/git/commit/e83c5163316f89bfbde7d9ab23ca2e25604af290) made to the Git codebase explains the origin of the name:

```
GIT - the stupid content tracker

"git" can mean anything, depending on your mood.

 - random three-letter combination that is pronounceable, and not 
   actually used by any common UNIX command.  The fact that it is a
   mispronunciation of "get" may or may not be relevant.
 - stupid. contemptible and despicable. simple. Take your pick from the 
   dictionary of slang.
 - "global information tracker": you're in a good mood, and it actually
   works for you. Angels sing, and a light suddenly fills the room. 
 - "goddamn idiotic truckload of sh*t": when it breaks

This is a stupid (but extremely fast) directory content manager.  It  
doesn't do a whole lot, but what it _does_ do is track directory
contents efficiently.
```

## Additional Resources

| Resource | Description |
| --- | --- |
| [Free Code Camp: Learn the Basics of Git in Under 10 Minutes](https://www.freecodecamp.org/news/learn-the-basics-of-git-in-under-10-minutes-da548267cc91/) | Free Code Camp's tutorial on basic Git |
| [Atlassian's Git Tutorials](https://www.atlassian.com/git/tutorials) | The strongest collection of Git tutorials available. Free, covering everything from beginning to advanced tutorials. |
| [Video: Learn Git in 15 Minutes](https://www.youtube.com/watch?v=USjZcfj8yxE) | Colt Steele's guide to Git |
| [Video: Git and GitHub for Beginners](https://www.youtube.com/watch?v=9U3IhLAnSxM&t=143s) | FreeCodeCamp's guide to Git and GitHub |
| [Dangit, Git!](https://dangitgit.com/) | Plain-english guide to getting through different Git situations |
