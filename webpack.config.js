const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const Package = require("./package.json");
const isProd = process.argv[process.argv.indexOf("--mode") + 1] === "production";

console.info(`Mode: ${((isProd) ? "Production" : "Development")}`);

module.exports = {
  entry: "./src/index.js",
  context: __dirname,
  target: "web",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "presentation-router.js",
    publicPath: "/dist/",
    library: "presentation-router",
    globalObject: "this",
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
    "next-core-object": {
      commonjs: "next-core-object",
      commonjs2: "next-core-object",
      amd: "next-core-object",
      root: "next-core-object"
    },
    "next-core-utilities": {
      commonjs: "next-core-utilities",
      commonjs2: "next-core-utilities",
      amd: "next-core-utilities",
      root: "next-core-utilities"
    }
  },
  stats: "errors-only",
  devtool: (isProd) ? "none": "source-map",
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(Package.version),
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
      "process.env.DEBUG": JSON.stringify(process.env.DEBUG)
    })
  ]
};
