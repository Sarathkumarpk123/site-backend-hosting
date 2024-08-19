const express = require('express')
const router = express.Router()
const {getAllAuthors, getAuthorById,addAuthor,updateAuthor, deleteAuthor}=require('./controllers/authorControllers')

router.get('/',  getAllAuthors )

  router.get('/:authorId',  getAuthorById)

  router.post('/', addAuthor )

  router.patch('/:authorId',  updateAuthor)

  router.delete('/:authorId', deleteAuthor)

module.exports = router