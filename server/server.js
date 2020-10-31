const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 8080;

const path = require("path");
const Key = require('./hamApiKey.js')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../public')));
console.log('here is the key: ', Key)
app.get(`https://api.harvardartmuseums.org/object?apikey=${Key}`)
app.listen(PORT, () => {
  console.log(`Hello, Scrumdog. Your server is running on PORT: ${PORT}`);
});
