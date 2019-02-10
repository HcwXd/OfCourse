'use strict';

const express = require('express');
const router = express.Router();
const reviewTable = require('../../database/reviewTable');
const courseTable = require('../../database/courseTable');

router.get('/:publishId/', function(req, res) {
  res.render('publish');
});

router.post('/newReview', async (req, res) => {
  console.log(req.body);

  if (req.body.courseInfo.courseId == -1) {
    const result = await courseTable.createCourse(req.body.courseInfo);
    req.body.reviewInfo.courseId = result.insertId;
  }
  const result = await reviewTable.createReview(req.body.reviewInfo);
  res.status(200).json({
    courseId: req.body.reviewInfo.courseId
  });
});

module.exports = router;