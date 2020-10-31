const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 8080;

const path = require("path");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('../client/dist'));

app.get('/', function(req, res) {
  res.sendFile('/home/brownb202/Desktop/ham-curator/public/index.html');
});

app.listen(PORT, () => {
  console.log(`Hello, Scrumdog. Your server is running on PORT: ${PORT}`);
});
