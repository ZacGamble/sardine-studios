# Build requirements for Github pages deployment

Build files must be pulled out of the assets folder and into the 'docs' directory. Github expects a docs folder as the root.

All affected import paths must be changed to respect the docs directory build. 
*(AboutView, PortfolioView, index.js must all have /assets replaced) 

index.html OR index.js must also have /assets removed from link href/minified js

    NOTE The schedule and services component imports in the docs/index.js file have an array holding references to index.js and style.css build files. (scoped styling?) 
    Clear these arrays to match the portfolio and about imports.




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
