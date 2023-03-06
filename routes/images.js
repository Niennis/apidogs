const express = require('express');

const { getImagesByBreed, getImagesBySubBreed } = require('../controller/images')

const router = express.Router()

router.get('/api/breed/:breed/images', (req, res) => {
  getImagesByBreed(req, res)
})

router.get('/api/breed/:breed/:subbreed/images', (req, res) => {
  getImagesBySubBreed(req, res)
})

module.exports = router;