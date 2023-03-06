const Images = require('../models/Images');

module.exports = {
  getImagesByBreed: async (req, res) => {
    const { breed } = req.params;

    try {
      const list = await Images.findOne({ name: breed })
      res.json({
        "message": list.imgs,
        "status": "success"
      })
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message })
    }
  },

  getImagesBySubBreed: async (req, res) => {
    const { breed, subbreed } = req.params;

    try {
      const list = await Images.findOne({ name: breed })
      const mapped = list.imgs.filter(item => item.includes(subbreed))
      res.json({
        "message": mapped,
        "status": "success"
      })
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message })
    }
  }
}