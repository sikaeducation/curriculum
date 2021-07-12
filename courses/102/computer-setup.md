# Computer Setup

Before you start your journey to becoming a developer, you should spend some timing turning your computer from a software _consumer_ computer to a software _developer_ computer. Follow each of these instructions in order. If something doesn't work, stop and try the step again.

Note: When you copy/paste a command from this page to your terminal, you may need to hit enter after everything looks like it's run.

1. [Set up your terminal](#set-up-your-terminal)
1. [Set up your text editor](#set-up-your-text-editor)
1. [Set up your package manager](#set-up-your-package-manager)
1. [Install Git and Zsh](#install-git-and-zsh)
1. [Configure your shell](#configure-your-shell)
1. [Install nvm and Node](#install-nvm-and-node)
1. [Configure Git and GitHub](#configure-git)

## Set up your terminal

Your terminal, which sometimes you'll hear referred to as a "shell" or "the command line" or a "CLI", will be your primary means of interacting with your computer as a developer. This will take the place of navigating through file folders, downloading installers, and running programs by clicking on icons.

### MacOS

* Download and install [iTerm2](https://www.iterm2.com/)
* Open iTerm2
* Go to Profiles -> Open Profiles -> Edit Profiles -> General -> Command, and make sure "Login shell" is selected
* Close any open terminals with Command + Q, and reopen them

### Ubuntu

The default terminal for Ubuntu (GNOME Terminal) is great! Make sure the following option is checked:

☰ → Preferences → Profiles → Your Name → Command → Run command as a login shell

## Set up your text editor

As a developer, you'll spend most of your time in your text editor. If you already have a preference, keep using it! Switching text editors, even with the same file, is not a big deal. If you're looking for a suggestion, VS Code is a good place to start.

### MacOS

Download and install [VS Code](https://code.visualstudio.com/)

### Ubuntu

Run the following commands:

```bash
sudo apt update
sudo apt install software-properties-common apt-transport-https wget
wget -q https://packages.microsoft.com/keys/microsoft.asc -O- | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main"
sudo apt update
sudo apt install code
```

## Set up your package manager

You're probably used to going to a website, downloading a file, and running it on your computer to install it. For developer software, you'll use package managers to automate a lot of this.

### MacOS

Install [Homebrew](https://brew.sh/) by running this command on your terminal:

```bash
xcode-select --install ; /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

If you did this right, you should be able to run:

```bash
which brew
```

and something like `/usr/local/bin/brew` should print out to your screen. If you didn't see anything print out to your screen, Brew didn't install correctly and you should try again.

### Ubuntu

You already have a package manager installed called `apt`!

## Install Git and Zsh

Now, we'll use our package manager to download some helpful software.

### MacOS

Run:

```bash
brew install git zsh
```

### Ubuntu

Run:

```bash
sudo apt update
sudo apt install git zsh
```

## Configure your shell

### MacOS and Ubuntu

Run:

```bash
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

When it asks you if you want to switch your shell over to zsh, type "y" and hit enter.

Then close all open instances of your terminal. When you reopen your terminal, your command prompt should have a colored `~` on it.

## Install `nvm` and Node

[nvm](https://github.com/nvm-sh/nvm) is a useful tool for running JavaScript code on your computer.

### MacOS and Ubuntu

Run the following command in your terminal:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```

Hit enter when you're done!

If this worked, the following command should print `nvm`:

```bash
command -v nvm
```

If that worked, run the following command in your terminal:

```bash
nvm install node
nvm use node
nvm alias default node
```

Next, make sure that Node configures correctly every time you open your terminal. Run:

```
code ~/.zshrc
```

* Scroll down to the bottom of the file.
* Paste all 3 of these lines at the bottom of the file:

```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

## Configure Git and GitHub

### MacOS and Ubuntu

Run these commands, swapping `you@example.com` and `Your Name` for your actual email and name:

```bash
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
```

Follow [these steps](https://help.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh) to connect your computer to Github:

1. [Check if you have an SSH key](https://docs.github.com/en/github/authenticating-to-github/checking-for-existing-ssh-keys) for your computer
2. If you do not, add one by following all of steps to [add an SSH key](https://docs.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
