'use strict';

const express = require('express');
const router = express.Router();
const { db, getData, applyQuery } = require('../../database/DB');
const mysql = require('mysql');

router.get('/:queryString', async (req, res) => {
  res.render('courseSearchResult');
});

router.get('/result/:queryString', async (req, res) => {
  const sql =
    'select courseId, courseName, courseProvider, \
              (select COUNT(*) from review r where r.courseId = c.courseId) as courseReviewCount, \
              (select AVG(r.score) from review r where r.courseId = c.courseId) as courseAvgScore, \
              (select r.text from review r where r.courseId = c.courseId Order by r.score LIMIT 1) as topReview from course c where c.courseName LIKE ? \
              ORDER BY courseAvgScore DESC, courseReviewCount DESC limit 10';
  const insert = ['%' + req.params.queryString + '%'];
  const query = mysql.format(sql, insert);
  const result = await getData(query);
  res.status(200).send(result);
});

router.get('/:courseId/reviews/:reviewId/reviewInfo', require('./controller/getReviewInfo'));
router.get('/:courseId/reviewsInfo', require('./controller/getReviewsInfo'));
router.get('/:courseId/courseInfo', require('./controller/getCourseInfo'));

module.exports = router;
