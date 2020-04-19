const express = require('express')

const UserController = require('./controllers/UserController')
const GameController = require('./controllers/GameController')
const PlatformController = require('./controllers/PlatformController')
const PurchaseController = require('./controllers/PurchaseController')
const PurchaseItemController = require('./controllers/PurchaseItemController')

const routes = express.Router()

routes.post('/user', UserController.create)
routes.get('/user', UserController.index)
routes.delete('/user/:id', UserController.delete)

routes.post('/game', GameController.create)
routes.get('/game', GameController.index)
routes.delete('/game/:id', GameController.delete)

routes.post('/platform', PlatformController.create)
routes.get('/platform', PlatformController.index)

routes.post('/purchase', PurchaseController.create)
routes.get('/purchase', PurchaseController.index)

routes.post('/purchaseItem', PurchaseItemController.create)
routes.get('/purchaseItem', PurchaseItemController.index)

module.exports = routes