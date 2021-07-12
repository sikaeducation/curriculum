# Introduction to the Command Line

The command line may seem like an archaic way to use a computer, but it's also one of the most powerful.

## CLI Advantages

Here are some advantages to the command line interface (CLI):

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

One of the easiest efficiency gains you can make as a programmer is to never take your hands off the keyboard. Every time you have to switch between the keyboard and mouse slows you down, not to mention how much efficient the CLI commands can be.

### Automation

Programming a computer to click on things and type into inputs in a graphical interface is possible, but slow and prone to errors. Everything that can be done on the CLI can be scripted, often by putting the same commands you would type on the CLI yourself in a file and running the file. This means very complex or repetitive tasks can easily be automated.

## Terminology

The terms "CLI", "Shell", and "Terminal" technically mean slightly different things, but are generally used interchangeably. "Open your terminal", "go into the CLI", or "run a shell command" all mean the same thing in common practice.

---

Programming languages and frameworks come and go, but the command line isn't going anywhere. CLI skills have one of the highest returns on investment, and are a critical part of every modern developer's toolbox.

## Watch Out!

* If you get in trouble on the command line, you can usually get back to safety by pressing `Control` + `c` enough times. Note that this is `Control` even on operating systems like MacOS that often use the `Command` key when other platforms use `Control`.

## More Resources

| Resource | Description |
| --- | --- |
| [Why Learn The Command Line](https://www.dataquest.io/blog/why-learn-the-command-line/) | An article outlining more arguments in favor of the CLI. |
