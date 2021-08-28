# Introduction to the Command Line

The command line interface, or CLI, may seem like an archaic way to use a computer. However, it's also one of the most powerful and offers software developers many advantages over graphical interfaces.

## Command Line Advantages

### Flexibility

Simple programs on the command line can be combined to make complex behavior.

```bash
cat *.txt | grep "JavaScript" > results.md
```

This searches through every file in the current folder that ends in `.txt` for lines containing the word "JavaScript" and prints them to a new file called `results.md`. If you know these individual commands and operators, you can chain them together to solve very narrow problems.

### Power

Some things can only be done on the command line:

```bash
for (f in *) do
  cd ${f}
  mkdir examples
  touch examples/README.md
done
```

This goes into every folder in your current directory, creates a folder called `examples`, and creates a file called `README.md` in each one. This kind of task is tedious and error-prone in a graphical file manager, but can be accomplished in 5 lines of code on the CLI.

### Speed

One of the simplest efficiency gains programmers can make is never taking their hands off the keyboard. Frequently switching between the keyboard and mouse slows you down.

### Automation

Programming computers to click on elements and type into inputs in a graphical interface is possible, but it's slow and prone to errors. CLI commands can be scripted, often by putting the same commands you would type on the CLI yourself in a file and running the file. This means repetitive or complex tasks can easily be automated.

## Opening the Terminal

To open your computer's terminal:

* **MacOS**: `Command` + `Space` to open Spotlight Search, search for "Terminal"
* **Linux**:  `Control` + `T`

The terms CLI, shell, and terminal mean slightly different things, but are generally used interchangeably. "Open your terminal", "go into the CLI", or "Pull up your shell" all mean the same thing in common practice.

---

Programming languages and frameworks come and go, but the command line isn't going anywhere. CLI skills have one of the highest returns on investment and are a critical part of every modern developer's toolbox.

## Watch Out!

If you get in trouble on the command line, you can usually get back to safety by pressing `Control` + `c` enough times. Note that this is `Control` even on operating systems like MacOS that often use the `Command` key when other platforms use `Control`.

## More Resources

| Resource | Description |
| --- | --- |
| [MDN: Command Line Crash Course](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line) | Mozilla's CLI tutorial |
| [Why Learn The Command Line](https://www.dataquest.io/blog/why-learn-the-command-line/) | An article outlining more arguments in favor of the CLI. |
| [Learn Enough Command Line To Be Dangerous](https://www.learnenough.com/command-line-tutorial) | A very thorough tutorial on CLI basics |
| [Video: How to use the command line](https://www.youtube.com/watch?v=5XgBd6rjuDQ) | Jesse Showalter's guide to the command line |
