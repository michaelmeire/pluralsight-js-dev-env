// set up a webserver that serves our files in our source directory
import express from 'express';
import path from 'path';
import open from 'open'; // to open the site in the browser
import compression from 'compression';

// no webpack because we don't interact with webpack in the production build
// we just server up static built files

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

// Serve from the dist folder instead of src
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function (req, res) {
  // Hard coding for simplicity. Pretend this is a real database
  res.json([
    {"id": 1, "firstName": "Bob", "lastName": "Smith", "email": "bob@gmail.com"},
    {"id": 2, "firstName": "Tammy", "lastName": "Norton", "email": "tnorton@yahoo.com"},
    {"id": 3, "firstName": "Tina", "lastName": "Lee", "email": "lee.tina@hotmail.com"}
  ]);
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
