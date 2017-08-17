const webpack = require('webpack');
const path = require('path');
const outputPath = path.resolve(__dirname, '../build');
const srcPath = path.resolve(__dirname, '../src');

const clientConfig = {
  devtool: 'inline-source-map',
  entry: `${srcPath}/client/app.js`,
  output: {
    filename: '[name].js',
    path: outputPath
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function(module, count) {
        let context = module.context;
        return context && context.indexOf('node_modules') >= 0;
      }
    })
  ]
};

module.exports = clientConfig;
