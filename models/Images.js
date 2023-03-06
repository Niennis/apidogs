const mongoose = require('mongoose');

const orderImages = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imgs: {
    type: [String],
    required: true,
  },
  subbreeds: {
    type: [String],
    required: false,
  }
});

module.exports = mongoose.model('Images', orderImages);