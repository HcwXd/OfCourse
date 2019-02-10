'use strict';

const express = require('express');
const router = express.Router();

router.get('/:publishId/', function(req, res) {
  res.render('publish');
});

module.exports = router;
