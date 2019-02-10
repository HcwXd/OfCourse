'use strict';

const express = require('express');
const router = express.Router();

router.get('/:courseId/reviews/:reviewId', function(req, res) {
  res.render('singleReviewDetail');
});

module.exports = router;
