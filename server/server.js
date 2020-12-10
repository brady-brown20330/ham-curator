const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require('cors')
const path = require("path");
const Key = require('./actualAPIKey.js')
const MongoClient = require('mongodb').MongoClient


//app.uses
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));
app.use(cors())

MongoClient.connect('mongodb+srv://artguy:goose123@cluster0.c6a4n.mongodb.net/<dbname>?retryWrites=true&w=majority', { useUnifiedTopology: true })
.then(client => {
  console.log('Connected to Database')
  const db = client.db('art-app-users')
  const usersCollection = db.collection('users')

  app.post('/users', (req, res) => {
    usersCollection.insertOne(req.body)
    .then(results => {
      res.send(results)
    })
    .catch(error => console.error(error))
  });

  app.get('/users', function(req, res) {
    const cursor = db.collection('users').find().toArray()
    .then(results => {
      res.send(results)
    })
  });

})
.catch(console.error)



app.listen(PORT, () => {
  console.log(`Hello, Scrumdog. Your server is running on PORT: ${PORT}`);
});
