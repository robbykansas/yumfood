const { Dish, Vendor } = require('../models')

class DishControllers{
  static async getDish(req, res, next) {
    try {
      const VendorId = req.params.VendorId
      const dishes = await Dish.findAll({
        where: {
          VendorId
        }
      })
      res.status(200).json(dishes)
    } catch (e) {
      next (e)
    }
  }

  static async postDish(req, res, next) {
    try {
      const VendorId = req.params.VendorId
      const obj = {
        name: req.body.name,
        price: req.body.price,
        VendorId: VendorId
      }
      const addDish = await Dish.create(obj)
      res.status(201).json(addDish)
    } catch (e) {
      next (e)
    }
  }

  static async putDish(req, res, next) {
    try {
      const id = req.params.DishId
      const VendorId = req.params.VendorId
      const obj = {
        name: req.body.name,
        price: req.body.price,
        VendorId: VendorId
      }
      const editDish = await Dish.update(obj, {
        where: {
          id
        },
        returning: true
      })
      res.status(200).json(editDish[1])
    } catch (e) {
      next (e)
    }
  }

  static async deleteDish(req, res, next) {
    try {
      const id = req.params.DishId
      const VendorId = req.params.VendorId
      await Dish.destroy({
        where: {
          id,
          VendorId
        }
      })
      res.status(200).json({message: 'Dish deleted successfully'})
    } catch (e) {
      next (e)
    }
  }
}

module.exports = DishControllers