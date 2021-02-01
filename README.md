# TypeScript implementation of debounce function
![Build Status](https://github.com/chodorowicz/ts-debounce//workflows/node-ci/badge.svg)
[![npm](https://img.shields.io/npm/v/ts-debounce.svg)](https://www.npmjs.com/package/ts-debounce)
[![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/ts-debounce.svg)](https://www.npmjs.com/package/ts-debounce)
[![npm type definitions](https://img.shields.io/npm/types/ts-debounce.svg)](https://www.npmjs.com/package/ts-debounce)
[![David](https://img.shields.io/david/chodorowicz/ts-debounce.svg)](https://david-dm.org/chodorowicz/ts-debounce)
[![David](https://img.shields.io/david/peer/chodorowicz/ts-debounce.svg)](https://david-dm.org/chodorowicz/ts-debounce)
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

*Debounce* creates a new function `g`, which when called will delay the invocation of the original function `f` until `n` milliseconds after it was last called.

It's very useful for scenarios when it's better to limit the number of times the function is called. E.g. think of search input which fetches data from API. It's enough display search results after user has stopped entering characters for some time.

## Install

You can install this package using `npm` using the command below

```bash
npm install ts-debounce
```

If you prefer `yarn`, install using the command below

```bash
yarn add ts-debounce
```

## Function arguments

```ts
import { debounce } from 'ts-debounce';

const debouncedFunction = debounce(originalFunction, waitMilliseconds, options);
```
- `originalFunction`
  - the function which we want to debounce
- `waitMilliseconds`
  - how many seconds must pass after most recent function call, for the original function to be called
- `options`
  - `isImmediate` (boolean)
    - if set to `true` then `originalFunction` will be called immediately, but on subsequent calls of the debounced function original function won't be called, unless `waitMilliseconds` passed after last call
  - `maxWait` (number)
    - if defined it will call the `originalFunction` after `maxWait` time has passed, even if the debounced function is called in the meantime
      - e.g. if `wait` is set to `100` and `maxWait` to `200`, then if the debounced function is called every 50ms, then the original function will be called after 200ms anyway

## Cancellation

The returned debounced function can be cancelled but by calling `cancel()` on it.
```ts
const debouncedFunction = debounce(originalFunction, waitMilliseconds, options);

debouncedFunction.cancel();
```

## Credits & inspiration

This implementation is based upon following sources:
- [JavaScript Debounce Function](https://davidwalsh.name/javascript-debounce-function) by David Walsh
- [Lodash implementation](https://lodash.com/)

## Compability

- version 2 - TypeScript 3.3
- version 1 - TypeScript 2.0

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://zacharysvoboda.com"><img src="https://avatars3.githubusercontent.com/u/5839548?v=4" width="100px;" alt=""/><br /><sub><b>Zac</b></sub></a><br /><a href="https://github.com/chodorowicz/ts-debounce/commits?author=zacnomore" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/karol-majewski"><img src="https://avatars1.githubusercontent.com/u/20233319?v=4" width="100px;" alt=""/><br /><sub><b>Karol Majewski</b></sub></a><br /><a href="https://github.com/chodorowicz/ts-debounce/commits?author=karol-majewski" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/Tuizi"><img src="https://avatars2.githubusercontent.com/u/2027148?v=4" width="100px;" alt=""/><br /><sub><b>Fabien Rogeret</b></sub></a><br /><a href="https://github.com/chodorowicz/ts-debounce/commits?author=Tuizi" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/iheidari"><img src="https://avatars3.githubusercontent.com/u/1315090?v=4" width="100px;" alt=""/><br /><sub><b>Iman</b></sub></a><br /><a href="https://github.com/chodorowicz/ts-debounce/commits?author=iheidari" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

- Project tries to adhere to [all-contributors specification](https://github.com/kentcdodds/all-contributors)
