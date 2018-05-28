const webpack = require('webpack')
const fs = require('fs')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('../config/webpack.config.dev.js')
const cheerio = require('cheerio')

const app = new (require('express'))()
const port = 3333

const compiler = webpack(config)


const htmlString = fs.readFileSync(__dirname + '/index.html')
const $ = cheerio.load(htmlString)

$('body').append('<script src="/assets/app.js"></script>')

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  // 如果false，将会给你列出一大堆无聊的信息。
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
}))

app.use(webpackHotMiddleware(compiler))

app.get('*', function(req, res) {
  res.sendFile($.html())
})

app.listen(port, function(error) {
  if (error) {
    /*eslint no-console: 0*/
    console.error(error)
  } else {
    /*eslint no-console: 0*/
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
