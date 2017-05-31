# re2-validator

## Install

```
$ npm i @ukyo/re2-validator
```

## Usage

```js
var module = require('@ukyo/re2-validator');

module.ready.then(() => {
  console.log(module.validate('hello!'));     // true
  console.log(module.validate('hello[');      // false
  console.log(module.validate('(?!hello!)')); // false
});
```