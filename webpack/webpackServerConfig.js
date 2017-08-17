var path = require('path');
var webpack = require('webpack');
var fs = require('fs');

var nodeModules = {};
fs
  .readdirSync('node_modules')
  .filter(x => ['.bin'].indexOf(x) === -1)
  .forEach(mod => {
    nodeModules[mod] = 'commonjs ' + mod;
  });

const outputPath = path.resolve(__dirname, '../build');
const srcPath = path.resolve(__dirname, '../src');

const serverConfig = {
  devtool: 'sourcemap',
  entry: `${srcPath}/main.js`,
  target: 'node',
  output: {
    path: outputPath,
    filename: 'server.js'
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
  externals: nodeModules,
  plugins: [
    /*
    BannerPlugin作用是在生成代码顶部加一行自定义代码；
    下面加的这行作用是，可以在运行编译后代码时，报错了根据sourcemap文件，找到编译前的代码对应位置进行调试
    */
    new webpack.BannerPlugin({
      banner: 'require("source-map-support").install();',
      raw: true,
      entryOnly: false
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': "'production'"
    })
  ],
  /*
  node配置项，意思是编译时，遇到node端的一些全局变量和模块的时候，
  是否进行模拟或者polyfill（使用node-libs-browser这个库），一般
  在编译后台代码的时候，全部不需要
  */
  node: {
    console: false,
    global: false,
    process: false,
    __filename: false,
    __dirname: false,
    Buffer: false,
    setImmediate: false
  }
};

module.exports = serverConfig;
