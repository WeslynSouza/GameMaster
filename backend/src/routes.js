const express = require('express')

const UserController = require('./controllers/UserController')
const GameController = require('./controllers/GameController')
const PlatformController = require('./controllers/PlatformController')

const routes = express.Router()

routes.post('/user', UserController.create)

routes.post('/game', GameController.create)
routes.get('/game', GameController.index)

routes.post('/platform', PlatformController.create)
routes.get('/platform', PlatformController.index)

module.exports = routes