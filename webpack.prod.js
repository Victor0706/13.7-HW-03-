const HtmlWebpackPlugin = require("html-webpack-plugin");

  module.exports = {
    mode: 'production',
    entry: './src/index2.js',
   devServer: {
    static: './dist',
    hot: false,
    port: 3001
   },
    plugins: [
           new HtmlWebpackPlugin({
        title: 'Production',
      }),
    ],
    output: {
      filename: 'main.js',
    },
  };