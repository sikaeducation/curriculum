# Git: Rolling Back

## Looking At Another Commit

To see what the code looked like at a particular commit, use `git checkout commit-hash`.

If you have a single file in a repo with these contents:

```text
A

B

C
```

and you have these commits:

```
commit a177edb5f145ea7dffa283e3d04e2715bbfdd052 (HEAD -> master, origin/master)

    Adds the letter C

commit c2c0e9ab87bf178fc0a3291b2b72202a29db0bb6

    Adds the letter B

commit 4eabf46b8fe00aea79c9d3afc05f1cc1851080cc

    Adds the letter A
```

Then `git checkout c2c0e` will make the file look like this:

```
A

B
```

### Making New Changes Based On Old Commits

If you'd like to start a new branch based on the commit you've checked out, create a new branch.

```bash
git checkout c2c0e
git checkout -b new-branch-name
```

## Getting a File From Another Commit

If you want to copy single file from another commit into your current branch, you can use `git checkout branch-name-or-commit-hash file-name-here`. For example:

```bash
git checkout c2c0e README.md
git checkout experiment index.css
git checkout master utilities.js
```

If the file you copy exists in your current branch, it will make it match the version you checked out.
