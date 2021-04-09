const express = require('express');
const app = express();
const path = require('path');

app.set('port',process.env.PORT || 3000),
app.set('views', path.join(__dirname, 'docs'));

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('../webpack.config');

app.use(webpackDevMiddleware(webpack(webpackConfig)));
// app.use(express.static(__dirname + '/public'))

//routes
app.use(require('./routes/index'));


module.exports = app;

