'use strict';

const express = require('express');
const router = express.Router();
const reviewTable = require('../../database/reviewTable');
const courseTable = require('../../database/courseTable');


router.get('/:publishId/', function(req, res) {
  res.render('publish');
});



module.exports = router;