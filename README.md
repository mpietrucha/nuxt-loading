# Nuxt 3 loading bar

This package adds internal (hidden) nuxt loading bar plugin support.

## Setup

1. Add `nuxt-loading` dependency to your project

```bash
npm i -D nuxt-loading
```

2. Add `nuxt-loading` to the `buildModules` section of `nuxt.config.ts`

```js
buildModules: [
  'nuxt-loading'
],
```

3. Override default style loader by `#nuxt-loading`.
