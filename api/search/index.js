'use strict';

const express = require('express');
const router = express.Router();

router.get('/:searchString', function(req, res) {
  res.render('courseSearchResult');
});

router.get('/:courseId/reviews/:reviewId/reviewInfo', require('./controller/getReviewInfo'));
router.get('/:courseId/reviewsInfo', require('./controller/getReviewsInfo'));
router.get('/:courseId/courseInfo', require('./controller/getCourseInfo'));

module.exports = router;
