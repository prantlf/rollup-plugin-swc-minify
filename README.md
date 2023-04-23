# rollup-plugin-swc-minify

[![Latest version](https://img.shields.io/npm/v/rollup-plugin-swc-minify)
 ![Dependency status](https://img.shields.io/librariesio/release/npm/rollup-plugin-swc-minify)
](https://www.npmjs.com/package/rollup-plugin-swc-minify)
[![Coverage](https://codecov.io/gh/prantlf/rollup-plugin-swc-minify/branch/master/graph/badge.svg)](https://codecov.io/gh/prantlf/rollup-plugin-swc-minify)

[Rollup] plugin to minify generated bundles using [swc].

Simpler than [rollup-plugin-swc], focusing only on minification of the bundled JavaScript output.

## Synopsis

```js
import { minify } from 'rollup-plugin-swc-minify'

export default {
  plugins: [minify()]
  // the rest of the configuration
}
```

## Installation

Make sure that you use [Node.js] 14 or newer and [Rollup] 2 or newer. Use your favourite package manager - [NPM], [PNPM] or [Yarn]:

```sh
npm i -D rollup-plugin-swc-minify
pnpm i -D rollup-plugin-swc-minify
yarn add -D rollup-plugin-swc-minify
```

## Usage

Create a `rollup.config.js` [configuration file] and import the plugin:

```js
import { minify } from 'rollup-plugin-swc-minify'

export default {
  input: 'src/index.js',
  output: { file: 'dist/main.js', format: 'iife', sourcemap: true },
  plugins: [
    minify()
  ]
}
```

Then call `rollup` either via the [command-line] or [programmatically].

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Lint and test your code.

## License

Copyright (C) 2022-2023 Ferdinand Prantl

Licensed under the [MIT License].

[MIT License]: http://en.wikipedia.org/wiki/MIT_License
[Rollup]: https://rollupjs.org/
[Node.js]: https://nodejs.org/
[NPM]: https://www.npmjs.com/
[PNPM]: https://pnpm.io/
[Yarn]: https://yarnpkg.com/
[configuration file]: https://www.rollupjs.org/guide/en/#configuration-files
[command-line]: https://www.rollupjs.org/guide/en/#command-line-reference
[programmatically]: https://www.rollupjs.org/guide/en/#javascript-api
[rollup-plugin-swc]: https://www.npmjs.com/package/rollup-plugin-swc
[swc]: https://swc.rs/
