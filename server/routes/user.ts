const Rout = require('express')
const controller = require('../controllers/user')
const auth = require('../controllers/auth')
const checkAdmin = require('../controllers/admin')

const rout = new Rout()

rout.post('/registration', controller.registration)
rout.post('/login', controller.logIn)
rout.get('/transactions',auth, controller.getAllTransactions)
rout.post('/add',auth, controller.add_to_wallet)
rout.put('/changerole', auth, checkAdmin('admin'), controller.changeRole)

module.exports = rout