# Environment Variables

Application data can be held in 3 places:

* In the application itself in the form of variables
* In external sources like databases, file systems, and APIs
* On the computer that's running the application, which is called the environment

Data on the computer that's running the application can be set with environment variables. In Node.js, environment variables are accessed with the `process.env` object:

```js
fetch(process.env.API_URL)
  .then(response => response.json())
```

Environment variables make it so the code doesn't need to change just because different environments need different values.

## Types of Environment Variable

There are two kinds of environment variables: Configuration options and secrets.

### Configuration Options

Configuration options are things the application needs to run, but change based on how the application is run. For example, the application may:

* Use one kind of database in development environments, another in testing environments, and another in production environments
* Log verbose errors to aid troubleshooting in development and testing, and log terse errors in production to preserve space
* Use a fake API URL in development and a real one in production
* Classify an environment as development, testing, or production

```
database.type = process.env.DATABASE_TYPE
captureLogs(process.env.LOGGING_LEVEL)
const apiUrl = process.env.API_URL
const currentEnvironment = process.env.NODE_ENV
```

### Secrets

Another type of environment variables is secrets. Secrets are sensitive information that few people should have access to, like API access tokens and hash signature keys. Developers are often use dummy secrets to use on their own computers in development, while the production servers have the actual secrets accessed-controlled in the production environment.

## `.env` Files

Environment variables are commonly kept in a file called `.env`. 

```
API_URL=https://api.product-stuff.com/some-path/
API_ACCESS_TOKEN=4fa2cbe90b32abeg8756b6b6aaef3a21ba8afaa0
JWT_SIGNING_KEY=0!$%fT_SE!
```

Traditionally, environment variable names are written in SCREAMING_SNAKE_CASE. Values aren't quoted, and there is no whitespace around the `=`.

## Hiding Environment Variables

Since configuration variables aren't specific to the code and secrets need to stay secret, the `.env` file should never be committed to Git repositories. Instead, `.env` should be added to every Node project's `.gitignore` file:

```js
node_modules
.env
```

## Documenting Environment Variables

Since `.env` files aren't committed, an easy way to document them is to create a file called `.env.example`. Copy all of your environment variables to this file, and obfuscate the values.

```
API_URL=https://api-url.com/goes/here
API_ACCESS_TOKEN=1234567890123456789012345678901234567890
JWT_SIGNING_KEY=s3cr3t
```

When the repo is cloned, the `.env.example` file is copied to `.env` and the values replaced.

## `dotenv`

npm's `dotenv` package is a tool for integrating environment variables in Node applications. To install `dotenv` on a project, run `npm install`:

```js
npm install dotenv
```

Then as early as possible in the application, invoke it's `config()` method:

```js
require("dotenv").config()
```

This only needs to be done once. Afterward, all of the environment variables from the `.env` file will be available on the `process.env` object.

## Watch Out!

If you accidentally commit a `.env` file, deleting it and recommitting will not remove it from your project's Git history. Every file that's ever been committed to a repo can be retrieved. This means the repo should not be pushed to any public place, and if it already has it should be considered compromised. The only way to purge a `.env` file from a Git history is to follow the [repo purging instructions](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository).

## Additional Resources

| Resource | Description |
| --- | --- |
| [An Introduction to Environment Variables and How to Use Them](https://medium.com/chingu/an-introduction-to-environment-variables-and-how-to-use-them-f602f66d15fa) | Blog post on environment variables |
| [Wikipedia: Environment Variable](https://en.wikipedia.org/wiki/Environment_variable) | Wikipedia's article on environment variables |
| [Removing sensitive data from a repository](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository) | GitHub's guide to purging sensitive data like .env files from repositories after they've been committed |
