const route = require('express').Router()
const { TagControllers } = require('../controllers')

route.get('/', TagControllers.getTag)
route.post('/', TagControllers.postTag)
route.put('/:id', TagControllers.putTag)
route.delete('/:id', TagControllers.deleteTag)

module.exports = route