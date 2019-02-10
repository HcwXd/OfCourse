'use strict';

const express = require('express');
const router = express.Router();
const courseTable = require('../../database/courseTable');

router.get('/:courseId/users/:userId/reviews/:reviewId', function(req, res) {
  res.render('singleReview');
});

router.get('/:courseId', function(req, res) {
  res.render('singleCourse');
});

router.get('/', async (req, res) => {
  const result = await courseTable.getURLInfo(req.query.url);
  res.status(200).send(result);
})

router.get('/:courseId/reviews/:reviewId/reviewInfo', require('./controller/getReviewInfo'));
router.get('/:courseId/reviewsInfo', require('./controller/getReviewsInfo'));
router.get('/:courseId/courseInfo', require('./controller/getCourseInfo'));

module.exports = router;