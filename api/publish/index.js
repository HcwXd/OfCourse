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
    req.body.courseInfo.courseId = result.insertId;
  }
  req.body.reviewInfo.courseId = req.body.courseInfo.courseId;
  const result = await reviewTable.createReview(req.body.reviewInfo);
  console.log(req.body.courseInfo.courseId);

  res.status(200).json({
    courseId: req.body.courseInfo.courseId,
  });
});

module.exports = router;
