# TypeScript implementation of debounce function [![Build Status](https://travis-ci.org/chodorowicz/ts-debounce.svg?branch=master)](https://travis-ci.org/chodorowicz/ts-debounce)

*Debounce* create a new function `g`, which when called will delay the invocation of the original function `f` until `n` milliseconds after it was lass called.

It's very useful for scenarios where it's better to limit the number of times the function is called. E.g. think of search input which fetches data from API. It's enough display search results after user stopped entering characters for some time.

## Function arguments

```ts
import { debounce } from 'ts-debounce';

const debouncedFunction = debounce(originalFunction, waitMilliseconds, options);
```
- `originalFunction`
  - the function which we want to debounce
- `waitMilliseconds`
  - how many seconds must pass before last function call for original function to be caled
- `options`
  - options object support now one argument
  - `isImmediate`
    - if set to `true` then `originalFunction` will be called immediatelly, but on subsequent calls of debounced function original function won't be called, unless `waitMilliseconds` passed after last call

## Credits & inspiration

This implementation is based upon following sources:
- [JavaScript Debounce Function](https://davidwalsh.name/javascript-debounce-function) by David Walsh
- [Lodash implementation](https://lodash.com/)

## Contributors

| [<img src="https://avatars1.githubusercontent.com/u/20233319" width="100px;"/><br /><sub><b>Karol Majewski</b></sub>](https://github.com/karol-majewski)<br />[💻](https://github.com/chodorowicz/ts-debounce/commits?author=karol-majewski "Code") | [<img src="https://avatars1.githubusercontent.com/u/2027148" width="100px;"/><br /><sub><b>Fabien Rogeret</b></sub>](https://github.com/Tuizi)<br />[💻](https://github.com/chodorowicz/ts-debounce/commits?author=Tuizi "Code")
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |

- Project tries to adhere to [all-contributors specification](https://github.com/kentcdodds/all-contributors)
