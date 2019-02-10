'use strict';

const express = require('express');
const router = express.Router();

router.get('/:courseId/reviews/:reviewId', function(req, res) {
  res.render('singleReviewDetail');
});
router.get('/:courseId/reviews/:reviewId/reviewInfo', require('./controller/getReviewInfo'));
router.get('/:courseId/reviews/:reviewId/courseInfo', require('./controller/getCourseInfo'));

module.exports = router;