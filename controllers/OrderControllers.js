const { Order, Dish, Vendor } = require('../models')

class OrderControllers{
  static async getOrder(req, res, next) {
    try {
      const VendorId = req.params.VendorId
      const orders = await Order.findAll(
        {
          include: [
            {
              model: Dish,
              include: [
                {
                  model: Vendor
                }
              ]
            }
          ],
          order: [['id', 'DESC']]
        }
      )
      const filterOrder = await orders.filter(order => order.Dish.Vendor.id == VendorId)
      res.status(200).json(filterOrder)
    } catch (e) {
      next (e)
    }
  }

  static async postOrder(req, res, next) {
    try {
      const VendorId = req.params.VendorId
      const DishName = req.body.DishName
      const findDish = await Dish.findOne({
        where: {
          name: DishName,
          VendorId: VendorId
        }
      })
      if (!findDish) {
        throw {
          status: 400,
          message: "cannot find dish"
        }
      } else {
        const Total = req.body.amount*findDish.price
        const obj = {
          DishId: findDish.id,
          amount: req.body.amount,
          request: req.body.request,
          Total: Total
        }
        const addOrder = await Order.create(obj)
        res.status(201).json(addOrder)
      }
    } catch (e) {
      next (e)
    }
  }

  static async putOrder(req, res, next){
    try {
      const id = req.params.id
      const obj = {
        amount: req.body.amount,
        request: req.body.request
      }
      const editOrder = await Order.update(obj, {
        where: {
          id
        },
        returning: true
      })
      res.status(200).json(editOrder[1])
    } catch (e) {
      next (e)
    }
  }

  static async deleteOrder(req, res, next){
    try {
      const id = req.params.id
      const deleteOrder = await Order.destroy({
        where: {
          id
        }
      })
      res.status(200).json({message: 'order deleted successfully'})
    } catch (e) {
      next (e)
    }
  }
}

module.exports = OrderControllers