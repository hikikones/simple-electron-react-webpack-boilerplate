const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const BUILD_DIR = path.resolve(__dirname, "build");
const APP_DIR = path.resolve(__dirname, "src");

const jsRule = {
  test: /\.(jsx?)$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  }
};

const htmlRule = {
  test: /\.html$/,
  use: [
    {
      loader: "html-loader"
    }
  ]
};

const cssRule = {
  test: /\.css$/,
  use: ["style-loader", "css-loader"]
};

const htmlPlugin = new HtmlWebPackPlugin({
  template: APP_DIR + "/index.html",
  filename: "index.html"
});

const mainConfig = {
  target: "electron-main",
  entry: APP_DIR + "/main.js",
  output: {
    filename: "main.js",
    path: BUILD_DIR
  },
  module: {
    rules: [jsRule]
  },
  node: {
    __dirname: false
  }
};

const rendererConfig = {
  target: "electron-renderer",
  entry: APP_DIR + "/renderer.js",
  output: {
    filename: "renderer.js",
    path: BUILD_DIR
  },
  module: {
    rules: [jsRule, htmlRule, cssRule]
  },
  plugins: [htmlPlugin]
};

module.exports = [mainConfig, rendererConfig];
