const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 8080;
const cors = require('cors')
const path = require("path");
const Key = require('./actualAPIKey.js')

//app.uses
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));
app.use(cors())

// app.get(`https://api.harvardartmuseums.org/object?apikey=${Key}`, (req, res) => {
//   res.send(res)
// })



app.listen(PORT, () => {
  console.log(`Hello, Scrumdog. Your server is running on PORT: ${PORT}`);
});
