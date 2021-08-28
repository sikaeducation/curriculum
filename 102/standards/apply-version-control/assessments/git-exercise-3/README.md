# Git Exercise

Follow these instructions in order. If you make a mistake, start over from the beginning.

1. Initialize a new git repo in an empty folder.
1. Make a new file in the new repo called `app.js`.
1. Stage all the files in the folder.
1. Commit your staged change with a comment that follows the standard present imperative tense.
1. Add `console.log("Hello, world!")` to `app.js`.
1. Open `app.js` with a text editor from the command line, add `console.log("Hello, world!")`, save, and quit.
1. Stage the change to `app.js`.
1. Open `app.js` with a text editor from the command line, add `console.log("¡Hola, mundo!")` to the second line, save, and quit.
1. Stage the change to `app.js`.
1. Commit your staged changes with a comment that follows the standard present imperative tense.
1. Run the command that shows all of your Git commits.
1. Add a remote repository called `origin` to the repo.
1. Sync your local changes with the remote repository.
1. Run `history | tail -n 12 > cli_history` to print your last 12 actions to the file `cli_history`.

## Rubric

A correct history looks like this:

```
1   7/14/2021 16:31  git init
2   7/14/2021 16:31  touch app.js
3   7/14/2021 16:31  git add .
4   7/14/2021 16:31  git commit -m "Add app.js"
5   7/14/2021 16:31  vim app.js
6   7/14/2021 16:32  git add app.js
7   7/14/2021 16:32  vim app.js
8   7/14/2021 16:32  git add app.js
9   7/14/2021 16:32  git commit -m "Add greetings to app.js"
10  7/14/2021 16:32  git log
11  7/14/2021 16:33  git remote add origin git@github.com:username/repo-name.git
12  7/14/2021 16:33  git push -u origin master
```
