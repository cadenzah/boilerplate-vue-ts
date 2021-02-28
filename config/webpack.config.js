const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoader = require('vue-loader');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = (env) => {
  // load environment variables to use
  const envKeys = require('./env')(env)

  // file paths
  const configPath = path.join(__dirname);
  const buildPath = path.join(configPath, '..', 'build');

  const config = {
    entry: [
      'core-js/stable',
      'regenerator-runtime/runtime',
      './src/main.js'
    ],
    output: {
      publicPath: '/',
      filename: 'js/[name].js',
      path: buildPath,
    },
    mode: 'production',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: '/node_modules',
          use: 'babel-loader',
        },
        {
          test: /\.vue$/,
          use: 'vue-loader',
        },
        {
          test: /\.css$/,
          use: [
            'vue-style-loader',
            'css-loader',
          ],
        },
        {
          test: /\.scss$/,
          use: [
            'vue-style-loader',
            {
              loader: 'css-loader',
              options: {
                esModule: false,
              },
            },
            'sass-loader',
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      new VueLoaderPlugin(),
      new webpack.DefinePlugin(envKeys.stringified),
    ],
  };

  return config;
}
