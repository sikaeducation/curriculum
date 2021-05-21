# Create React App

Vue CLI is a great way to maintain a decoupled Vue front-end, or learn and experiment with Vue without needing a build system.

## Installation

`npm i -g @vue/cli`

## Creating New Projects

`vue create project-name` (You can also use `vue create .` to start new project in the current directory)

Recommendation for beginners:

1. Manually select features
2. Use `j`/`k`/`spacebar` to select:
  * Choose Vue version
  * Babel
  * CSS Pre-processors
  * Linter / Formatter
3. 3.x (Preview)
4. Sass/SCSS (with dart-sass)
5. ESLint + Airbnb config
6. Lint on save
7. In package.json
8. No

## Using Vue CLI

While in a Vue CLI project, you can use the following scripts:

* `npm run serve` - Run a development server
* `npm run build` - Make a production build in the `/dist` directory
* `npm run lint` - Run the linter
