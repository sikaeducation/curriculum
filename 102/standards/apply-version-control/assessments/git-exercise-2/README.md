# Git Exercise

Follow these instructions in order. If you make a mistake, start over from the beginning.

1. Fork [this repo](https://github.com/kylecoberly/blank-website) on GitHub.
1. Clone your fork of the repo locally.
1. Move into the repo you just cloned
1. Switch to the existing branch `server-rendered`.
1. Delete the `index.js` file.
1. Stage your change.
1. Commit your staged change with a comment that follows the standard present imperative tense.
1. Switch back to the original branch.
1. Open `index.html` with a text editor from the command line, add `<html></html>`, save, and quit.
1. Stage your change.
1. Commit your staged change with a comment that follows the standard present imperative tense.
1. Push the changes in the `master` branch to your GitHub fork.
1. Run `history | tail -n 11 > cli_history` to print your last 11 actions to the file `cli_history`.

## Rubric

A correct history looks like this:

```
1   7/14/2021 14:56  git clone git@github.com:user-name/repo-name.git
2   7/14/2021 14:56  cd blank-website
3   7/14/2021 14:56  git checkout server-rendered
4   7/14/2021 14:56  rm index.js
5   7/14/2021 14:56  git add index.js
6   7/14/2021 14:56  git commit -m "Delete index.js"
7   7/14/2021 14:57  git checkout master
8   7/14/2021 14:57  vim index.html
9   7/14/2021 14:57  git add index.html
10  7/14/2021 14:58  git commit -m "Add boilerplate to HTML file"
11  7/14/2021 14:58  git push
```
