# CLI Exercise

Follow these instructions in order. If you make a mistake, start over from the beginning.

1. Make a directory called `site`.
1. Navigate into the directory.
1. Make a file called `index.html`.
1. Make a directory called `pages`.
1. Make a file in the `pages` directory called `about.html` with a text editor from the command line without navigating into the folder. Add `<html></html>` to the first line. Save and quit.
1. Move `about.html` into the current directory.
1. List the files in the `pages` directory.
1. Remove the `pages` directory.
1. Navigate back to the original folder.
1. Remove the `site` folder.
1. Type the following command: `history | tail -n 10 > cli_history` to print your last 12 actions to the file `cli_history`.

## Rubric

A correct history looks like this:

```
1   7/13/2021 22:45  mkdir site
2   7/13/2021 22:45  cd site
3   7/13/2021 22:46  touch index.html
4   7/13/2021 22:46  mkdir pages
5   7/13/2021 22:46  vim pages/about.html
6   7/13/2021 22:47  mv pages/about.html .
7   7/13/2021 22:47  ls pages
8   7/13/2021 22:47  rm -rf pages
9   7/13/2021 22:47  cd ..
10  7/13/2021 22:47  rm -r site
```
