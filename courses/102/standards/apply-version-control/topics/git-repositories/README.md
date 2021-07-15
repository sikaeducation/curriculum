# Git: Repositories

A Git repository or "repo" is a folder containing not only files, but every state those files have ever been in. Git offers many tools for inspecting those different states, and even rolling back your files to one of those states if necessary. Git does all of this very efficiently, so repo file sizes stay very small. This makes it feasible for everyone working with a repository to maintain a complete copy.

## Local Respositories

To make a local repository, run `git init`. This makes the `git` command line program able to run commands when your shell is in this folder.

```bash
ls -a
. ..

git status
fatal: not a git repository (or any of the parent directories): .git

git init

ls -a
. .. .git

git status
On branch master

No commits yet

nothing to commit (create/copy files and use "git add" to track)
```

Once a folder has become a Git repo, you can stage and commit files in it.

## Watch Out

* Technically, a Git repo is any folder that has a `.git` folder in it. Removing the `.git` folder removes the repository and its history, but leaves all the rest of the files in their current state.
* You may find that your repo includes files that you're not expecting it to, or you may find that something unexpected is a repository. This is often caused by having `.git` folders in more than one level of the same hierarchy.
  1. Run `ls -a` to see if you have a `.git` folder in your present directory
  2. If you do, run `rm -rf .git` to remove it
  3. Otherwise, run `cd ..` to move up a directory
  4. Repeat until you find a folder with a `.git` folder in it to remove
