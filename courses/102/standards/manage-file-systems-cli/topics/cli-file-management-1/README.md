# CLI: File Management

When you manage files in a graphical file manager, you double-click to open files, drag them into new folders, and use key commands and context menus to delete and rename files. You can do all of these efficiently on the command line.

## Files

In the CLI, there are only files and directories (also called folders). Things like programs, input, and even different processes in the computer are represented by files. Unlike in most graphical file managers, there are no "extensions". The characters at the end of a file (like `.txt`, `.js`, `.md`, `.zip`) are just part of the name and carry no other meaning. Files and folders that start with a `.` (like `.bashrc` and `.ssh`) are considered "hidden", and are only listed if you explicitly ask for them.

## Creating Files

To create a blank file, use the `touch` command:

```bash
ls
some-file.md

touch some-new-file.md

ls
some-file.md some-new-file.md
```

The touch command was originally intended to update the "last modified" time of a file to now (and it still does that). If the file doesn't exist, it creates it.

## Creating Directories

To create an empty directory, use the the `mkdir` command:

```bash
ls
some-directory some-file.md

mkdir some-new-directory

ls
some-directory some-new-directory some-file.md
```

## Reading files

To see what's in a file, use the `cat` command.

```bash
ls
the-alphabet.txt

cat the-alphabet.txt
ABCDEFGHIJKLMNOPQRSTUVWXYZ
```

`cat` is short for "concatenate", and was designed to be used to print the combined contents of a multiple files. If you only give it one file though, it prints the contents of the file to the screen.

## Moving files and folders

To move a file or folder, use the `mv` command:

```bash
ls
some-directory some-file.md

mv some-file.md some-directory

ls
some-directory

cd some-directory
ls
some-file.md
```

`mv` takes two arguments:

* The absolute or relative path of the file you want to move
* An absolute or relative path to the directory you want to move the file to

## Renaming files and folders

To rename a file, use the `mv` command:

```bash
ls
some-file.md

mv some-file.md another-file.md

ls
another-file.md
```

This is the same command used to move files. If you the path you're moving the file to is in a different directory, it will move it there. If the path you're moving the file to is in the same directory, it will rename the file. You can combine these to move and rename a file at the same time:

```bash
ls
some-directory some-file.md

mv some-file.md some-directory/new-directory-and-new-name.md

ls
some-directory

cd some-directory
ls
new-directory-and-new-name.md
```

## Copying files and folders

To copy a file, use the `cp` command:

```bash
ls
some-file.md

cp some-file.md copy-of-some-file.md

ls
some-file.md copy-of-some-file.md
```

To copy a folder, you need to add the `-r` ("recursive") flag:

```bash
ls
some-directory

cp -r some-directory copy-of-some-directory

ls
some-directory copy-of-some-directory
```

## Deleting files and folders

To delete a file, use the `rm` command:

```bash
ls
some-file.md copy-of-some-file.md

rm copy-of-some-file.md

ls
some-file.md
```

To delete a folder, use the `-r` ("recursive") flag:

```bash
ls
some-full-directory some-empty-directory

rm -r some-empty-directory

ls
some-full-directory
```

Note that this only works if the directory doesn't have any files in it. To delete a folder _and_ its contents, you need to add the `-f` ("force") flag:

```bash
ls
some-full-directory some-empty-directory

rm -rf some-directory

ls
some-empty-directory
```

## Watch Out!

* Be careful using `/`. Any path that starts with `/` is an absolute path. So, `mv old new` takes a file called `old` and renames it `new`, but `mv old /new` takes a file called `old`, moves to the root directory, and renames it `new`.
* `rm` is a very dangerous command. By default, you will not be prompted to ask if you're sure you want to delete something, which means you can accidentally entire projects and even large parts of your computer by not using it carefully. You can use the `-i` flag ("interactive") to make the CLI prompt you to ask if you're sure you want to delete something.
