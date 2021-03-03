const route = require('express').Router()
const tagRoute = require('./tagRoutes')
const vendorRoute = require('./vendorRoutes')
const dishRoute = require('./dishRoutes')
const orderRoute = require('./orderRoutes')

route.use('/v1/tags', tagRoute)
route.use('/v1/vendors', vendorRoute)
route.use('/v1/dishes', dishRoute)
route.use('/v1/orders', orderRoute)

module.exports = route