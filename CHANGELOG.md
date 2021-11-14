# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## 2021-11-14

- 💥 [breaking] improve type inference thanks @juanmendes for the idea
  - since we're improving types in some scenarios (instead of `any` you can get more precise types) this can break your type checks

```ts
const inputs = document.querySelectorAll("input");
inputs[0].addEventListener(
  "input",
  debounce((event) => {
    // here Event has `Event` type, before it was just `any`
    expectType<EventTarget | null>(event.target);
  }, 0)
);
```

- 🧪 introduce tsd type testing
- 📝 new add past contributors
- 💅 Add Prettier, format files

## 2021-02-16 [3.0.0]

- ✨ [new] support for promises (thanks @sanduluca)
- ✨ [new] support for callback (thanks @sanduluca)
- 📝 [new] Update docs in relation to this release
- 💥 [breaking] `ts-debounce` assumes that Promise is available

## 2021-02-02 [2.3.0]

- ✨ [new] added ES module key to support ES module import
- 📝 [changed] updated docs

## 2021-01-10 [2.2.0]

- ✨ [new] maxWait option added

## 2020-11-29 [2.1.0]

- ✨ [new] Now it's possible to cancel debounced function
- 📦 [changed] Updated packages

## 2020-02-01 [2.0.1]

- [Fixed] removed unneeded cache files from distributed npm package

## 2020-02-01 [2.0.0]

- [changed] improved type of returned function (thanks @zacnomore)

## 2018-11-13 [1.0.0]

- [changed] use microbundle package for compilation
- [changed] updated dev dependencies to newest versions

## 2018-05-08 [0.3.0]

- [changed] loosen up Node requirement to include Node 8
- [changed] start using all-contributors format for contributions

## 2018-02-05 [0.2.0]

### Changed

- [breaking] third argument is now an object with one argument, this will allow to add further options int the future without breaking API
