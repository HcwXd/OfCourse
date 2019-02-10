'use strict';

const express = require('express');
const router = express.Router();

router.get('/:courseId/users/:userId/reviews/:reviewId', function(req, res) {
  res.render('singleReview');
});

router.get('/:courseId', function(req, res) {
  res.render('singleCourse');
});

router.get(
  '/:courseId/users/:userId/reviews/:reviewId/info',
  require('./controller/getReviewsInfo')
);

module.exports = router;
