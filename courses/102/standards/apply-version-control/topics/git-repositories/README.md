# Git: Repositories

A Git repository, or repo, is a folder containing not only files, but every state those files have ever been in. Git offers many tools for inspecting those different states, and even rolling back your files to one of those states if necessary. Git does all of this very efficiently, so repo file sizes stay very small. This makes it feasible for everyone working with a repository to maintain a complete copy.

## Local Respositories

To make a local repository, run `git init`. This makes the `git` command line program able to run commands when your shell is in this folder.

![Workflow of creating a new Git repo](assets/new-git-repo.png)

Once a folder has become a Git repo, you can stage and commit files in it.

## GitHub Repos

If a repository already exists on GitHub, you copy it to your computer with `git clone`:

![GitHub repo overview](assets/github-1.png)

![Cloning a repo from GitHub](assets/github-2.png)

You can look at this code, make changes to it, or even use it as the basis for your own code without affecting the repository that you cloned from.

## Watch Out

* Technically, a Git repo is any folder that has a `.git` folder in it. Removing the `.git` folder removes the repository and its history, but leaves all the rest of the files in their current state.
* You may find that your repo includes files that you're not expecting it to, or you may find that something unexpected is a repository. This is often caused by having `.git` folders in more than one level of the same hierarchy.
  1. Run `ls -a` to see if you have a `.git` folder in your present directory
  2. If you do, run `rm -rf .git` to remove it
  3. Otherwise, run `cd ..` to move up a directory
  4. Repeat until you find a folder with a `.git` folder in it to remove

## Additional Resources

| Resource | Description |
| --- | --- |
| [Git: Getting a Git Repository](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository) | Git's guide to Git repositories |
| [Atlassian: Setting up a repository](https://www.atlassian.com/git/tutorials/setting-up-a-repositoryGit) | Atlassian's guide to Git repositories |
