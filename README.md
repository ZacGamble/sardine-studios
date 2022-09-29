# Build requirements for Github pages deployment

Image assets must be pulled out of the docs/assets folder into the 'docs' directory. Github expects a docs folder as the root.
Image assets pathing must be changed to respect the docs directory build. 
*(AboutView, PortfolioView, and main logo in index.js must all have /assets replaced with ./sardine-studios/*ASSET*/)


## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```
