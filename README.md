TypeScript implementation of debounce function [![Build Status](https://travis-ci.org/chodorowicz/ts-debounce.svg?branch=master)](https://travis-ci.org/chodorowicz/ts-debounce)
==============================================

*Debounce* create a new function `g`, which when called will delay the invocation of the original function `f` until `n` milliseconds after it was lass called. 

It's very useful for scenarios where it's better to limit the number of times the function is called. E.g. think of search input which fetches data from API. It's enough display search results after user stopped entering characters for some time.

Function arguments
==================
```ts
const debouncedFunction = debounce(originalFunction, waitMilliseconds, isImmediate);
```
- `originalFunction`
  - the function which we want to debounce
- `waitMilliseconds`
  - how many seconds must pass before last function call for original function to be caled
- `isImmediate`
  - if set to `true` then `originalFunction` will be called immediatelly, but on subsequent calls of debounced function original function won't be called, unless `waitMilliseconds` passed after last call

Credits & inspiration
=====================
This implementation is based upon following sources:
- [JavaScript Debounce Function](https://davidwalsh.name/javascript-debounce-function) by David Walsh
- [Lodash implementation](https://lodash.com/)

