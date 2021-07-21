## CLI: Arguments and Flags

## Arguments

Arguments are often files that you want to run a command on. Some commands don't need any arguments:

```bash
ls
```

This lists all of the files and folders in the current directory. You can also give it the path to a folder as an argument to list everything in that directory:

```bash
ls ~/projects
```

Some commands take multiple arguments:

```bash
mv old/location/some-file.md new/location
```

## Flags

Flags are options for commands. They take two forms:

### Short Flags

Most of the flags you'll use are short flags. They're represented by a single dash followed by a single letter:

```bash
ls -l
```

This example passes the "l" short flag to the `ls` program, which makes it do a "long" listing.

The nice thing about short flags is that they can be combined. You can combine the `-l` short flag and the `-a` short flag to make `-la`:

```bash
ls -la
```

With short flags, the order doesn't matter. These two commands are the same:

```bash
ls -la
ls -al
```

### Long Flags

Long flags are represented by two dashes followed by words:

```bash
rm --recursive some-full-directory
```

Long flags are descriptive, but take longer to type and can't be chained together.

### Long and Short Flags

Many flags have both long and short versions. These are identical:

```bash
ls -r
ls --recursive
```

Not every short flag has long equivalent, and not every long flag has a short equivalent.

### Using Arguments and Flags

Some commands take flags and arguments:

```bash
rm -rf some-folder
```

### Using Flags with Arguments

Some commands take flags that have their own arguments, and these take a couple of forms. They may just look like regular arguments that are placed after the flag:

```bash
ffmpeg -i input-file -o output-file
```

Or they may be something like `=` to separate them:

```bash
git log --pretty=oneline
```
