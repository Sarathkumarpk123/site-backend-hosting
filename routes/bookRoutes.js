const express = require('express')
const router = express.Router()
const {getAllBooks, getBookById,addBook,updateBook, deleteBook}=require('./controllers/bookControllers')

router.get('/',  getAllBooks)

  router.get('/:bookId',getBookById )

  router.post('/',addBook )

  router.patch('/:bookId',updateBook )

  router.delete('/:bookId',  deleteBook)

module.exports = router