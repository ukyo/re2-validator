# re2-validator

re2-validator is generated with Emscripten(+ WebAssembly).

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

## Example

see: https://ukyo.github.io/re2-validator/example/