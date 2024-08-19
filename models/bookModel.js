const mongoose = require('mongoose');
const { deleteBook } = require('../controllers/bookControllers');

const bookSchema = new mongoose.Schema({
    title: String,
    thumbnail:String,
    language:String,
    description:String,
  });
  const Book = mongoose.model('Book', bookSchema);

  module.exports= deleteBook