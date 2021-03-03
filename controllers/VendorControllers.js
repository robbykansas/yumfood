const { Vendor, Tag, VendorTag } = require('../models')

class VendorControllers{
  static async getVendor(req, res, next) {
    try {
      let tags = req.query.tags
      if (tags) {
        const vendors = await Vendor.findAll(
          {
            include: [
              {
                model: Tag,
                where: {
                  name: tags
                }
              }
            ]
          }
        )
        res.status(200).json(vendors)
      } else {
        const vendors = await Vendor.findAll(
          {
            include: [
              {
                model: Tag
              }
            ]
          }
        )
        res.status(200).json(vendors)
      }
    } catch (e) {
      next(e)
    }
  }

  static async postVendor(req, res, next) {
    try {
      const obj = {
        name: req.body.name,
        logo: req.body.logo
      }
      const tags = req.body.tags
      const addVendor = await Vendor.create(obj)
      const addTags = await VendorTag.bulkCreate(tags.map(tag => {return {
        VendorId: addVendor.id,
        TagId: tag
      }}))
      res.status(201).json({vendor: addVendor, tags: addTags})
    } catch (e) {
      next(e)
    }
  }

  static async putVendor(req, res, next) {
    try {
      const id = req.params.id
      const obj = {
        name: req.body.name,
        logo: req.body.logo
      }
      const tags = req.body.tags
      const editVendor = await Vendor.update(obj, {
        where: {
          id
        }
      })
      await VendorTag.destroy({
        where: {
          VendorId: id
        }
      })
      const addTags = await VendorTag.bulkCreate(tags.map(tag => {return {
        VendorId: id,
        TagId: tag
      }}))
      res.status(200).json({vendor: editVendor, tags: addTags})
    } catch (e) {
      next(e)
    }
  }

  static async deleteVendor(req, res, next) {
    try {
      const id = req.params.id
      await Vendor.destroy({
        where: {
          id
        }
      })
      res.status(200).json({message: 'vendor deleted successfully'})
    } catch (e) {
      next(e)
    }
  }
}

module.exports = VendorControllers