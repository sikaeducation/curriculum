# CLI Exercise

Follow these instructions in order. If you make a mistake, start over from the beginning.

1. Make a file called `install.sh`
1. Make a directory called `app`
1. Navigate into the `app` folder
1. Make a directory called `bin`
1. Move the `install.sh` file to the `bin` directory
1. Copy the `install.sh` file you just moved and the name it `install.sh.backup` 
1. Remove all of the files in the `bin` directory in one command, leaving the directory intact
1. Remove the `bin` directory
1. List the contents of the current directory (`app`)
1. Move up to your original directory
1. Remove the `app` directory
1. Type the following command: `history | tail -n 11 > cli_history` to print your last 11 actions to the file `cli_history`.
1. Commit and push your changes

## Rubric

A correct history looks like this:

```
1   7/13/2021 22:52  touch install.sh
2   7/13/2021 22:52  mkdir app
3   7/13/2021 22:52  cd app
4   7/13/2021 22:52  mkdir bin
5   7/13/2021 22:53  mv ../install.sh bin
6   7/13/2021 22:57  cp bin/install.sh bin/install.sh.backup
7   7/13/2021 22:57  rm bin/*
8   7/13/2021 22:57  rm -r bin
9   7/13/2021 22:57  ls
10  7/13/2021 22:58  cd ..
11  7/13/2021 22:58  rm -r app
```
