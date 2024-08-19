const mongoose = require('mongoose');
const { deleteUser } = require('../controllers/userControllers');

const userSchema = new mongoose.Schema({
    title: String,
    thumbnail:String,
    language:String,
    description:String,
  });
  const user = mongoose.model('user', userSchema);

  module.exports= deleteUser