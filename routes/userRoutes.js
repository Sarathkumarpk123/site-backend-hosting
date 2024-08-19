const express = require('express')
const router = express.Router()
const {getAllUsers, getUserById,addUser,updateUser, deleteUser}=require('./controllers/userControllers')

router.get('/',  getAllUsers)

  router.get('/:userId',getUserById )

  router.post('/',addUser )

  router.patch('/:userId',updateUser )

  router.delete('/:userId',  deleteUser)

module.exports = router