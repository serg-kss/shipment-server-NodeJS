const Router = require('express')
const router = new Router()
const usersController = require('../controllers/users.controller')


router.post('/create-user', usersController.createUser)
router.get('/get-users', usersController.getUsers)
router.post('/auth', usersController.auth)

module.exports = router