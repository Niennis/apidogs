const express = require('express');

const { getList } = require('../controller/list');

const router = express.Router()

router.get('/api/breed/list/all', (req, res) => {
  getList(req, res)
})

module.exports = router;
