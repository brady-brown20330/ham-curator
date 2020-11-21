const mongoose = require('mongoose');
const { Schema } = mongoose;

const usersCollection = new Schema({
  name: String,
  email: String,
  password: String
})
