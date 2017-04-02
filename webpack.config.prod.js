const webpack = require('webpack');
const { resolve } = require('path');
const WebpackChunkHash = require('webpack-chunk-hash');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  context: resolve(__dirname),
  devtool: 'cheap-source-map',

  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|svg|eot|woff|ttf|svg|woff2|mp3)$/,
        use: ['file-loader'],
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'), // eslint-disable-line quote-props
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: module => module.context && module.context.indexOf('node_modules') !== -1,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
    new webpack.HashedModuleIdsPlugin(),
    new WebpackChunkHash({ algorithm: 'md5' }),
    new HtmlWebpackPlugin({
      template: 'index.ejs',
    }),
    new InlineManifestWebpackPlugin({
      name: 'webpackRuntime',
    }),
  ],
};
