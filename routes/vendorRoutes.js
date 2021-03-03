const route = require('express').Router()
const { VendorControllers, TagControllers } = require('../controllers')

route.get('/', VendorControllers.getVendor)
route.post('/', VendorControllers.postVendor)
route.put('/:id', VendorControllers.putVendor)
route.delete('/:id', VendorControllers.deleteVendor)

module.exports = route