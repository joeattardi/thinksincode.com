---
title: Dusting off an old package
date: '2018-11-26'
---

A couple of years ago I threw together a quick little npm package to highlight JSON syntax in the console: [`json-colorizer`](https://www.npmjs.com/package/json-colorizer). It's not super popular, it usually gets a couple thousand downloads a week, and 23 packages depend on it. So not too big of a deal.

Still, recently I was looking for something to do on a Saturday afternoon, so I figured I would give the package an update.

## Cleanup

There was some ES2015 syntax, but not much. So the first thing I did was change those `var`s to `let`s and `const`s. Yes, I once wrote a blog post saying it's OK to use `var`. I have come to my senses since then, and never use `var` now. I go `const` by default, and only use `let` if the value needs to change, which I try to avoid.

## Custom color changes

Under the hood, `json-colorizer` uses [`chalk`](https://npmjs.com/package/chalk) to apply the colors. The package allows you to override the default colors for the different JSON token types (thanks to a contribution from [Espen Hovlandsdal](https://espen.codes/)). The way to specify custom colors was to map token types to `chalk` color functions. So, for example:

```javascript
  colors: {
    STRING_KEY: chalk.green,
    STRING_LITERAL: chalk.blue.bold
  }
```

This required a library using `json-colorizer` to also include `chalk` as a direct dependency. I decided to change this so that, instead of references to `chalk` color functions, the colors were referenced by name instead. Now, the custom colors look like:

```javascript
  colors: {
    STRING_KEY: 'green',
    STRING_LITERAL: 'blue.bold'
  }
```

Chaining multiple color functions by name was accomplished with Lodash's `get` function. It wasn't much of a change, but it removed the need to have `chalk` as a direct dependency, at least.

## Add Prettier

[Prettier](https://prettier.io/) is all the rage now. I think it's great. It's an opinionated code formatter that supports not only JavaScript, but other languages as well. Editors can be configured to automatically apply Prettier's formatting either with a keyboard shortcut, or automatically on save. It helps keep my coding style consistent. I did make two changes to the Prettier rules: single quote strings, and a maximum line width of 120.

You can even set up your project to automatically format with Prettier on every Git commit. To do this, you need a couple of packages: `husky` and `lint-staged`. Then, just add this to your `package.json`:

```javascript
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "src/**/*.js": [
      "prettier --write",
      "git add"
    ]
  }
```

Voilà! Now every time you go to commit changes, `lint-staged` will apply Prettier formatting to your code. This will help ensure that all code in the project follows a consistent style.

## Push the new version!

Since I changed the way custom colors are specified, that was a breaking change. Since I try to follow [semantic versioning](https://semver.org/) in my projects, this meant a major version bump. 

It was a fun way to spend an afternoon! Maybe I'll give some of my other old projects a facelift too.