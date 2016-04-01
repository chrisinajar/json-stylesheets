# json-stylesheets
[![Circle CI](https://circleci.com/gh/chrisinajar/json-stylesheets.svg?style=svg)](https://circleci.com/gh/chrisinajar/json-stylesheets)
A collection of common stylesheets from the internet exposed in JSON form for `to-css` and `insert-styles`

## Install

```
npm install --save json-stylesheets
```

## Usage

```js
var normalizeCSS = require('json-stylesheets/normalize');
var toCss = require('to-css');
var insertStyles = require('insert-styles');

// ...

insertStyles(toCss(normalizeCSS));
```

... or you can use the convenience method exposed by the root of the library

```js
var insertStylesheet = require('json-stylesheets');

insertStylesheet(require('json-stylesheets/normalize'));
```

## Tests

```
npm run test
```

# License
MIT
