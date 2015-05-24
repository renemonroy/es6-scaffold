var config = require('./config');

var webpack = require('webpack'),
  WebpackDevServer = require('webpack-dev-server'),
  webpackConfig = require('./webpack.config.js');

var bundleConfig = {
  contentBase : __dirname,
  hot : false,
  quiet : false,
  noInfo : false,
  inline : true,
  publicPath : webpackConfig.output.publicPath,
  stats : { colors : true },
  historyApiFallback : true,
  headers: { 'Access-Control-Allow-Origin': '*' }
};

var server = new WebpackDevServer(webpack(webpackConfig), bundleConfig);
server.listen(config.port, config.ip, function() {});