# Git: Staging

Staging is selecting a group of files you've created or changed and preparing to commit them.

## Seeing The Current Status

`git status` shows you which files in the current directly are untracked, modified, staged, or staged-but-with-new-modifications.

## Staging Bulk Changes

`git add -A` or `git add --all` will stage every change you've made in the entire repo since your last commit. This is a common choice.

## Staging Individual Files

You can also stage individual files by passing the filenames to the `git add`:

```bash
git add file-1.md file-2.md ../../file-3.md some-folder/another-folder/file-4.md
```

You can also use `git add .` to stage every change you've made in the current folder, including any subfolders.

## Staging Individual Hunks

A hunk is a contiguous section of a file that's been changed. You can review each hunk in file with the `-p` or `--patch` flag:

```
git add -p file-1.md
```

This will bring up a dialog for each hunk. Press `y` to stage it, `n` to ignore it.

## Unstaging

Unstage files by using `git reset file-name-goes-here`. You can unstage all changes since your last commit with `git reset` without any arguments. Note that this doesn't undo any changes in the files, it only moves them from staged to unstaged.

## Additional Resources

| Resource | Description |
| --- | --- |
| [Git: Recording Changes to the Repository](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository) | Git's guide to staging |
| [Atlassian: Saving Changes](https://www.atlassian.com/git/tutorials/saving-changes) | Atlassian's guide to staging |
