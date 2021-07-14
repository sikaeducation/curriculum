# CLI Exercise

Follow these instructions in order. If you make a mistake, start over from the beginning.

1. Create a file named `cli.md`.
1. Open `cli.md` file with a text editor from the command line, add the text "# CLI" to the top of the file, then save and quit.
1. Print the contents of the `cli.md` file to the terminal.
1. Make a folder named `notes`.
1. Navigate to the `notes` folder.
1. Move the `cli.md` file into the `notes` folder.
1. Copy the `cli.md` file to a file called `cli-2.md`.
1. List the contents of the `notes` folder.
1. Delete the `cli.md` file.
1. Rename the `cli-2.md` file to `cli.md`.
1. Navigate up a directory.
1. Remove the `notes` directory.
1. Type the following command: `history | tail -n 12 > cli_history` to print your last 12 actions to the file `cli_history`.

## Rubric

A correct history looks like this:

```
1   7/13/2021 22:34  touch cli.md
2   7/13/2021 22:34  nano cli.md
3   7/13/2021 22:34  cat cli.md
4   7/13/2021 22:35  mkdir notes
5   7/13/2021 22:35  cd notes
6   7/13/2021 22:37  mv ../cli.md .
7   7/13/2021 22:37  cp cli.md cli-2.md
8   7/13/2021 22:37  ls
9   7/13/2021 22:37  rm cli.md
10  7/13/2021 22:38  mv cli-2.md cli.md
11  7/13/2021 22:38  cd ..
12  7/13/2021 22:38  rm -rf notes
```
