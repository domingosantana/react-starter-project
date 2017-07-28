# React starter project

A minimal project to get started with React:

* [Webpack](https://github.com/webpack/webpack): Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.
* [WebpackDevServer](https://github.com/webpack/webpack-dev-server): Development server that provides live reloading.
* ES6 and JSX via Babel.
* [ReactHotLoader](https://github.com/gaearon/react-hot-loader): React Hot Loader is a plugin that allows React components to be live reloaded without the loss of state.
* [SassLoader](https://github.com/webpack-contrib/sass-loader): Loads a SASS/SCSS file and compiles it to CSS. Use [CssLoader](https://github.com/webpack/css-loader) to turn it into a JS module and [ExtractTextPlugin](https://github.com/webpack-contrib/extract-text-webpack-plugin) to extract it into a separate file.
* [PostCssLoader](https://github.com/postcss/postcss-loader): Is a tool for transforming styles with JS plugins. Use [AutoPrefixer](https://github.com/postcss/autoprefixer) plugin to parse CSS and add vendor prefixes to CSS rules using values from Can I Use.
* [CopyWebpackPlugin](https://github.com/kevlened/copy-webpack-plugin): A webpack plugin that copies individual files or entire directories to the build directory.

## Installation:

```
git clone https://github.com/domingosantana/react-starter-project.git
cd react-starter-project
npm install
```

## Development:

* Run dev server: `npm start`
    * Open up your browser at http://localhost:8080 and you should see the app running.
* Building for production: `npm run build`
    * A build directory is created with the packaged application
    ready to be deployed.

## License

MIT
