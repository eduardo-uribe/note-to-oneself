// import React from 'react';
// import { renderToString } from 'react-dom/server';
// import App from '../src/components/App.jsx';

import fs from 'fs';
import path from 'path';
import express from 'express';
const app = express();
const PORT = 1234;

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.cjs';
import webpackHotMiddleware from 'webpack-hot-middleware';

const compiler = webpack(webpackConfig);

/**
 * @see {@link https://github.com/webpack/webpack-dev-middleware}
 */
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
  })
);

/**
 * @see {@link https://github.com/webpack-contrib/webpack-hot-middleware}
 */
app.use(webpackHotMiddleware(compiler, {}));

// GET: /
app.get('/home', function (request, response, next) {
  return response.status(200).json({});
});

// respond to a get request
app.get('/list', function (request, response, next) {
  let list = [
    { note: 'First note to oneself.' },
    { note: 'Second note to oneself.' },
    { note: 'Third note to oneself.' },
  ];
  return response.status(200).json(list);
});

// 404 response
app.use('*', function (request, response, next) {
  response.status(404).send('404 Not Found');
});

// global error handler
app.use(function (error, request, response, next) {
  console.log(error.stack);
  response.status(500).send('Internal SErver Error: ');
});

app.listen(PORT, function () {
  console.log(`Server running on http://localhost:${PORT}`);
});
