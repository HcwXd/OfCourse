'use strict';

const express = require('express');
const router = express.Router();

router.get('/:courseId/users/:userId/reviews/:reviewId', function(req, res) {
  res.render('singleReview');
});
<<<<<<< HEAD
router.get('/:courseId/reviews/:reviewId/reviewInfo', require('./controller/getReviewInfo'));
router.get('/:courseId/reviews/:reviewId/courseInfo', require('./controller/getCourseInfo'));
=======
>>>>>>> 0f8578aca99bfc3d2a91cb887d7129baae3acc3e

router.get('/:courseId', function(req, res) {
  res.render('singleCourse');
});

router.get(
  '/:courseId/users/:userId/reviews/:reviewId/reviewInfo',
  require('./controller/getReviewsInfo')
);
router.get(
  '/:courseId/users/:userId/reviews/:reviewId/courseInfo',
  require('./controller/getCourseInfo')
);

module.exports = router;
