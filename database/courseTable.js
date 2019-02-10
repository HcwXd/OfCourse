const { db, getData, applyQuery } = require('./DB');
const mysql = require('mysql');

async function createCourse(courseInfo) {
  if (courseInfo.courseProvider == "coursera") {
    courseInfo.url = 'https://cdn-images-1.medium.com/max/1600/1*STTQyckmI3KbGm29sqIxEA.png';
  } else if (courseInfo.courseProvider == "udemy") {
    courseInfo.url = 'https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg';
  } else if (courseInfo.courseProvider == "edx") {
    courseInfo.url = 'https://www.edx.org/sites/default/files/theme/edx-logo-header.png';
  } else {
    courseInfo.url = '';
  }
  const sql = 'INSERT INTO course SET ?';
  const insert = courseInfo;
  const query = mysql.format(sql, insert);
  const ret = await applyQuery(query);
  return ret;
}

async function getCourseInfo(courseId) {
  const sql =
    'select c.courseName, c.courseProvider, \
              (select count(*) from review r where r.courseId = c.courseId) as courseReviewCount, \
              (select avg(r.score) from review r where r.courseId = c.courseId) as courseAvgScore \
              from course c \
              where c.courseId = ?';
  const insert = [courseId];
  const query = mysql.format(sql, insert);
  const result = await getData(query);
  return result[0];
}

async function getURLInfo(courseURL) {
  const sql = 'select * from course where url = ?';
  const insert = [courseURL];
  const query = mysql.format(sql, insert);
  const result = await getData(query);
  return result[0];
}


createCourse({
  categoryId: 1,
  courseName: "javascript",
  level: 'hard',
  duration: '2hr',
  language: 'madarin',
  des: 'cool',
  courseProvider: 'edx',
})

module.exports = {
  createCourse,
  getCourseInfo,
  getURLInfo,
};
