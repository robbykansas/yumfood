const route = require('express').Router()
const { OrderControllers } = require('../controllers')

route.get('/:VendorId', OrderControllers.getOrder)
route.post('/:VendorId', OrderControllers.postOrder)
route.put('/:id', OrderControllers.putOrder)
route.delete('/:id', OrderControllers.deleteOrder)

module.exports = route