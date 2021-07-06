# CLI: Navigation

In a graphical file manager, you navigate the file system by double-clicking on folders and using the back or up buttons. Your current location is usually showed as breadcrumbs.

## Absolute and Relative Paths

There are two ways to describe any location.

An absolute path starts with `/` and describes how to get to a location from the root directory.

(diagram)

A relative path is based on your current location, and doesn't start with `/`. You can describe directories above your current directory with `..`.

(diagram)

Lastly, you can describe locations relative to your home directory by using `~`:

(diagram)

## Finding out where you are

To see your current location, run `pwd`:

```bash
pwd
/users/username-goes-here
```

## Finding out what's in a directory

To see the files in a directory, use `ls`:

```
ls
some-directory some-file.md some-other-file-md
```

You can use the `-l` ("long listing") flag to see all the files and folders listed one-per-line, as well as other information about them:

```
ls -l
total 3
drwxrwxr-x 2 username-here username-here 4096 Jul  3 10:12 some-directory
-rw-rw-r-- 1 username-here username-here   23 Jul  3 10:13 some-file.md
-rw-rw-r-- 1 username-here username-here   23 Jul  3 10:13 some-other-file.md
```

You can use the `-a` ("all") flag to see all files including hidden files, which are files that start with a `.`:

```
ls - a
. .. .some-hidden-directory .some-hidden-file some-directory some-other-directory some-file.md some-other-file-md
```

You can even combine the two:

```
ls -la
total 7
drwxrwxr-x 2 username-here username-here 4096 Jul  3 10:12 .
drwxrwxr-x 2 username-here username-here 4096 Jul  3 10:12 ..
drwxrwxr-x 2 username-here username-here 4096 Jul  3 10:12 .some-hidden-directory
-rw-rw-r-- 1 username-here username-here   23 Jul  3 10:13 .some-hidden-file.md
drwxrwxr-x 2 username-here username-here 4096 Jul  3 10:12 some-directory
-rw-rw-r-- 1 username-here username-here   23 Jul  3 10:13 some-file.md
-rw-rw-r-- 1 username-here username-here   23 Jul  3 10:13 some-other-file.md
```

## Navigating

To navigate in a shell, use the `cd` command to _change directory_ and give it any relative or absolute path.

```bash
cd ..                                               # Move up a directory
cd ../some-folder/some-other-folder                 # Move up a directory, then into "some-folder", then "some-other-folder."
cd some-folder                                      # Move into "some-folder"
cd some-folder/some-other-folder/yet-another-folder # Navigate into "some-folder", then "some-other-folder", then "yet-another-folder"
cd /                                                # Move to the root directory
cd /home/user-name-here                             # Move to your home directory
cd ~                                                # Move to your home directory
cd ~/some-folder                                    # Move to your home directory, then "some-folder"
```

## Watch Out!

* You can only `cd` into folders, not files.
