const path = require('path');
const express = require('express');
const app = express();
const port = 8000;

// respond to a get request
app.get('/', function (request, response, next) {
  let file = path.join(__dirname, 'index.html');
  response.sendFile(file, function (error) {
    if (error) {
      next(error);
    } else {
      console.log('HTML file sent.');
    }
  });
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

app.listen(port, function () {
  console.log(`Server running on http://localhost:${port}`);
});
