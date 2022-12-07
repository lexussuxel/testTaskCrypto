const Rout = require('express')
const controller = require('../controllers/user')
const auth = require('../controllers/auth')
const checkAdmin = require('../controllers/admin')

const rout = new Rout()

rout.post('/registration', controller.registration)
rout.post('/login', controller.logIn)
rout.get('/transactions/:id',auth, controller.getAllTransactions)
rout.get('/users',auth, checkAdmin('admin'), controller.getAllUsers)
rout.post('/add',auth, controller.add_to_wallet)
rout.get('/check/:id', controller.check)
rout.put('/changerole', auth, checkAdmin('admin'), controller.changeRole)

module.exports = rout