const route = require('express').Router()
const { DishControllers } = require('../controllers')

route.get('/:VendorId', DishControllers.getDish)
route.post('/:VendorId', DishControllers.postDish)
route.put('/:VendorId/:DishId', DishControllers.putDish)
route.delete('/:VendorId/:DishId', DishControllers.deleteDish)

module.exports = route