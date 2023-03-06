const Images = require('../models/Images');

module.exports = {
  getList: async (req, res) => {
    try {
      const list = await Images.find({})
      const mapped = list.map(item =>
        ({ [item.name]: item.subbreeds }));
      const newObj = Object.assign({}, ...mapped);

      res.json({
        "message": newObj,
        "status": "success"
      })
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message })
    }

  }
}