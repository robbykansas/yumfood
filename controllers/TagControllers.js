const { Tag, Vendor } = require('../models')

class TagControllers{
  static async getTag(req, res, next) {
    try{
      const tags = await Tag.findAll(
        {
          includes: [
            {
              model: Vendor
            }
          ]
        }
      )
      res.status(200).json(tags)
    } catch (e) {
      next(e)
    }
  }

  static async postTag(req, res, next) {
    try{
      const obj = {
        name: req.body.name
      }
      const tag = await Tag.create(obj)
      res.status(201).json(tag)
    } catch (e) {
      next(e)
    }
  }

  static async putTag(req, res, next) {
    try{
      const id = req.params.id
      const obj = {
        name: req.body.name
      }
      const tag = await Tag.update(obj, {
        where: {
          id
        },
        returning: true
      })
      res.status(200).json(tag[1])
    } catch (e) {
      next(e)
    }
  }

  static async deleteTag(req, res, next) {
    try{
      const id = req.params.id
      await Tag.destroy({
        where: {
          id
        }
      })
      res.status(200).json({message: 'tag deleted successfully'})
    } catch (e) {
      next(e)
    }
  }
}

module.exports = TagControllers