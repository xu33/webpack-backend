const webpack = require('webpack');
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const outputPath = path.resolve(__dirname, 'release/js');

module.exports = {
  devtool: 'inline-source-map',
  entry: { index: './public/js/index.js' },
  output: {
    filename: '[name].js',
    path: outputPath,
    publicPath: '/assets',
    chunkFilename: '[id].chunk.js',
    sourceMapFilename: '[file].map'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader/webpack', 'babel-loader']
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'url-loader',
        options: {
          limit: 10000 // 10kb
        }
      }
    ]
  },
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function(module, count) {
        let context = module.context;
        return context && context.indexOf('node_modules') >= 0;
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime',
      minChunks: Infinity
    }),
    new webpack.DefinePlugin({
      IN_APP: JSON.stringify(false),
      'process.env.NODE_ENV': '"development"'
    })
  ]
};
