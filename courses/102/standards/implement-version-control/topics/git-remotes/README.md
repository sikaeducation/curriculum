# Git: Remotes

One of the most powerful aspects of Git is that everyone who has a copy of a repo not only has all of the files in the repo, but they all individually have a copy of all of the previous states of the repo. That means if one person's copy of a repo becomes lost or corrupted, they can easily get a new one from anyone else who has a copy and not lose any work or history. This makes Git repos incredibly resilient to corruption or loss. Services like GitHub, Bitbucket, and GitLab are primarily tools for a storing a copy of a repo that other developers can make their own copy of (or "clone"), including the repo's entire history.

## Cloning

The most common way to get a copy of a repo is to _clone_ it from a service like GitHub:

```bash
git@github.com:githubtraining/example-basic.git
```

This will copy the repo from GitHub's computers to your computer, into a folder called `example-basic` in your current directory.

Cloning a repository from a remote repo usually means authenticating somehow. If you clone a repo using GitHub's "SSH" option:

(image)

It will look for an SSH key in your `~/.ssh` directory to send with your clone request. If that key is connected to your GitHub account, GitHub will check to see if your account has permission to clone that repo. If it does, it will be copied to your computer.

Alternatively, if you clone a repo using GitHub's "HTTPS" option:

```bash
git clone https://github.com/githubtraining/example-basic.git
```

It will ask you to enter your GitHub username and password.

The SSH option makes working with GitHub much easier, but requires generating an SSH key and connecting it to your GitHub account.

## Adding a Remote

Instead of cloning a repo, you can make one locally with `git init` and push it to a service like GitHub:

```bash
git remote add origin git@github.com:githubtraining/example-basic.git
```

This enables you to "push" your copy of the Git repo to GitHub and "pull" GitHub's copy of the repo to your computer to get the latest changes.

If you make a mistake (such as adding the browser URL instead of the `.git` URL), you can fix it with `set-url`:

```
git remote set-url origin git@github.com:githubtraining/example-basic.git
```

## Pushing

When you make new commits in your local repo, you can use `git push` to make a Git remote add your new commits to its copy of the repo:

```bash
git push
Everything up-to-date

git add new-file-to-stage.md
git commit -m "Make a new commit"
git push origin master

```

## Pulling



