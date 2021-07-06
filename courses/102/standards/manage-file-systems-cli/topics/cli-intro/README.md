# Introduction to the Command Line

The command line may seem like an archaic way to use a computer, but it's also one of the most powerful. Here are some advantages to the command line interface (CLI):

## Flexibility

Simple programs on the command line can be combined to make complex behavior.

```bash
cat *.txt | grep "JavaScript" > results.md
```

This searches through every file that ends in `.txt` for lines containing the word "JavaScript" and prints them to a new file called `results.md`.

## Power

Some things can only be done on the command line:

```bash
for (f in *) do
  cd ${f}
  mkdir examples
  touch examples/README.md
done
```

This goes into every folder in your current directory, creates a folder called `examples`, and creates a file called `README.md` in each one. This kind of task is tedious and error-prone in a graphical file manager, but 5 lines of code on the CLI.

## Speed

One of the easiest efficiency gains you can make as a programmer is to take your hands off the keyboard. Every time you have to reach for the mouse slows you down.

## Automation

Programming a computer to click on things and type into inputs in a graphical interface is possible, but slow and prone to errors. Everything that can be done on the CLI can be scripted, often by putting the same commands you would type on the CLI yourself in a file and running the file. This means very complex or repetitive tasks can easily be automated.
