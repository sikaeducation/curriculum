## CLI: Arguments and Flags

Many commands require options or file paths in order to work. These are specified as either arguments or flags.

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

Most of the flags you'll use are short flags. Short flags are a single dash followed by a single letter:

```bash
ls -l
```

This example passes the `l` short flag to the `ls` program, which makes it do a long listing. Short flags can be combined, like adding the `-l` and `-a` short flags to make `-la`:

```bash
ls -la
```

With short flags, the order doesn't matter. These two commands are the same:

```bash
ls -la
ls -al
```

### Long Flags

Long flags are two dashes followed by words:

```bash
rm --recursive some-full-directory
```

Long flags are descriptive, but take longer to type and can't be chained together.

### Long and Short Flags

Many flags have both long and short versions. For example, these are the same:

```bash
ls -r
ls --recursive
```

Not every short flag has long equivalent and vice-versa.

### Using Arguments and Flags

Some commands take flags and arguments:

```bash
rm -rf some-folder
```

When using flags and arguments, order often matters. Refer to the documentation for the command to be sure.

### Using Flags with Arguments

Some commands take flags that have their own arguments. Some look like regular arguments that are placed after the flag:

```bash
ffmpeg -i input-file -o output-file
```

Or they may be separated by a character like `=`:

```bash
git log --pretty=oneline
```

## Additional Resources

| Resource | Description |
| --- | --- |
| [Heroku: CLI Flags in Practice](https://blog.heroku.com/cli-flags-get-started-with-oclif) | Heroku's blog on CLI flags |
| [MDN: Introducing Command Options](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line#introducing_command_options) | MDN's crash course on CLI command options |
