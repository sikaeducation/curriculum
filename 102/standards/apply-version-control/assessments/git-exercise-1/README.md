# Git Exercise

Follow these instructions in order. If you make a mistake, start over from the beginning.

1. Initialize a new git repo in an empty folder.
1. Make two files in the new repo, `index.html` and `index.js` using one command.
1. Stage `index.html`.
1. Make a file in the repo called `index.css`.
1. Stage `index.css`.
1. Commit your staged changes with a comment that follows the standard present imperative tense.
1. Execute the command that shows which files are tracked, modified, and untracked.
1. Stage `index.js`.
1. Commit your staged changes with a comment that follows the standard present imperative tense.
1. Add a remote repository called `origin` to the repo.
1. Sync your local changes with the remote repository.
1. Run `history | tail -n 11 > cli_history` to print your last 11 actions to the file `cli_history`.

## Rubric

A correct history looks like this:

```
1   7/14/2021 14:32  git init
2   7/14/2021 14:32  touch index.html index.js
3   7/14/2021 14:33  git add index.html
4   7/14/2021 14:33  touch index.css
5   7/14/2021 14:33  git add index.css
6   7/14/2021 14:33  git commit -m "Add index.html and index.css"
7   7/14/2021 14:33  git status
8   7/14/2021 14:33  git add index.js
9   7/14/2021 14:34  git commit -m "Add index.js"
10  7/14/2021 14:40  git remote add origin git@github.com:some-user/some-repo.git
11  7/14/2021 14:40  git push -u origin master
```
