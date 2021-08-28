# Git: Reverting

One of the best things about version control is that you can go back to a previous state. How do you do it?

## `git revert`

Reverting reverses the changes you made in a specific commit. It **does not** go back to that point in the history of the repo.

If you have a single file in a repo with these contents:

```text
A

B

C
```

And a commit history that looks like this:

```
commit a177edb5f145ea7dffa283e3d04e2715bbfdd052 (HEAD -> master, origin/master)

    Adds the letter C

commit c2c0e9ab87bf178fc0a3291b2b72202a29db0bb6

    Adds the letter B

commit 4eabf46b8fe00aea79c9d3afc05f1cc1851080cc

    Adds the letter A
```

Running this command:

```
git revert c2c0e
```

Will make the file look like this:

```text
A



C
```

And the commit history look like this:

```
commit 308033b74c68ec83b88b38bbb26e6967062c8e6d

    Revert "Adds the letter B"
    
    This reverts commit c2c0e9ab87bf178fc0a3291b2b72202a29db0bb6.

commit a177edb5f145ea7dffa283e3d04e2715bbfdd052 (HEAD -> master, origin/master)

    Adds the letter C

commit c2c0e9ab87bf178fc0a3291b2b72202a29db0bb6

    Adds the letter B

commit 4eabf46b8fe00aea79c9d3afc05f1cc1851080cc

    Adds the letter A
```

## Watch Out!

* For a revert to be effective, commits need to represent a single complete unit of work. If commits are big, haphazard, or include multiple features, you won't be able to undo anything specific.
* Reverting changes in a file you've changed since may cause a merge conflict. These can seem dangerous or alarming, but they're not difficult to resolve. Git will present you with both versions of the file, and you'll need to delete anything that you don't want to appear in the final version. Stage and commit your changes, and the conflict will be resolved.
