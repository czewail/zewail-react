var path = require('path');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('../config/webpack.config.dev.js');

var app = new (require('express'))();
var port = 3001;

var compiler = webpack(config);


app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  // 如果false，将会给你列出一大堆无聊的信息。
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
}));

app.use(webpackHotMiddleware(compiler));

app.get('*', function(req, res) {
	res.sendFile(__dirname + '/index.html')
});

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
});
