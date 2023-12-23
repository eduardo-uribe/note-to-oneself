// import React from 'react';
// import { renderToString } from 'react-dom/server';
// import App from '../src/components/App.jsx';
import postgres from 'postgres';
import 'dotenv/config';

const sql = postgres(process.env.DATABASE_URL, { ssl: 'require' });

async function readNotes() {
  const notes = await sql`
  select * from notes
  where user_id = 1
  `;

  return notes;
}

import fs, { read } from 'fs';
import path from 'path';
import express from 'express';
const app = express();
const PORT = 1234;

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.cjs';
import webpackHotMiddleware from 'webpack-hot-middleware';

const compiler = webpack(webpackConfig);

app.use(express.json());
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

// respond to a get request
app.get('/list', async function (request, response, next) {
  let list = await readNotes();
  return response.status(200).json(list);
});

async function createNote({ note }) {
  const newnote = await sql`
  insert into notes
  (note, user_id)
  values (${newnote} , 1)
  returning *
  `;
  return newnote;
}

// respond to a post request
app.get('/create', async function (request, response, next) {
  const { note } = request.body;
  let newnote = await createNote(note);
  // console.log(newnote);
  return response.status(200).json(newnote);
});

//404 response
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
