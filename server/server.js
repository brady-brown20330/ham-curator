const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 8080;

const path = require("path");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../public')));

app.listen(PORT, () => {
  console.log(`Hello, Scrumdog. Your server is running on PORT: ${PORT}`);
});
