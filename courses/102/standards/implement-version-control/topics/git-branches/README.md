# Git: Branches

## Listing Branches

To see a list of your available branches, use `git branch`:

```bash
git branch

* master
experiment-1
experiment-2
add-login
```

Navigate up and down with `j` and `k`, and press `q` to quit. The branch you are currently on is marked with a `*`.

## Switching To A Branch

To switch branches, use `git checkout`:

```bash
# On a branch called "master"
git checkout -b experiment
# On an existing called "experiment-2"
```

## Making A Branch

To make a new branch, use `git checkout -b`:

```bash
# On a branch called "experiment-2"
git checkout -b experiment
# On a new branch called "experiment-3"
```

## Copying a File From Another Branch

If you want to copy single file from another branch into your current branch, you can use `git checkout branch-name file-name-here`. For example:

```bash
git checkout experiment index.css
git checkout master utilities.js
```

If the file you copy exists in your current branch, it will make it match the version you checked out.

Note that this also works with any commit hash too:

```bash
git checkout c2c0e README.md
```
