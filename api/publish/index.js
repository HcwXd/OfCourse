'use strict';

const express = require('express');
const router = express.Router();
const reviewTable = require('../../database/reviewTable');
const courseTable = require('../../database/courseTable');


router.get('/:publishId/', function(req, res) {
  res.render('publish');
});

router.post('/newReview', async (req, res) => {
  if (req.body.courseInfo.courseId == -1) {
    const result = await courseTable.createCourse(body.courseInfo);
    req.reviewInfo.courseId = result.insertId;
  }
  const resutl = await reviewInfo.createReview(body.reviewInfo);
  res.status(200).send(req.reviewInfo.courseId);
})

module.exports = router;