const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  context: __dirname,
  target: "web",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'presentation-router.js',
    publicPath: '/dist/',
    library: "presentation-router",
    globalObject: 'this',
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  externals: {
    'next-core-object': {
      commonjs: 'next-core-object',
      commonjs2: 'next-core-object',
      amd: 'next-core-object',
      root: 'next-core-object'
    },
    'next-core-utilities': {
      commonjs: 'next-core-utilities',
      commonjs2: 'next-core-utilities',
      amd: 'next-core-utilities',
      root: 'next-core-utilities'
    },
    'presentation-dom': {
      commonjs: 'presentation-dom',
      commonjs2: 'presentation-dom',
      amd: 'presentation-dom',
      root: 'presentation-dom'
    },
    'lodash.map': {
      commonjs: 'lodash.map',
      commonjs2: 'lodash.map',
      amd: 'lodash.map',
      root: 'lodash.map'
    },
    'lodash.isregexp': {
      commonjs: 'lodash.isregexp',
      commonjs2: 'lodash.isregexp',
      amd: 'lodash.isregexp',
      root: 'lodash.isregexp'
    }
  },
  stats: "errors-only",
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(require("./package.json").version)
    })
  ]
};
