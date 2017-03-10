// set up a webserver that serves our files in our source directory
import express from  'express';
import path from  'path';
import open from  'open'; // to open the site in the browser

const port = 3000;
const app = express();

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
