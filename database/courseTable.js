const {
  db,
  getData,
  applyQuery
} = require('./DB');
const mysql = require('mysql');

async function createCourse(courseInfo) {
  const sql = 'INSERT INTO course SET ?';
  const insert = courseInfo;
  const query = mysql.format(sql, insert);
  const ret = await applyQuery(query);
  return ret;
}

async function getCourseInfo(courseId) {

  const sql = 'select c.courseName, c.courseProvider, \
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
  courseProvider: 'udemy',
})

module.exports = {
  createCourse,
  getCourseInfo,
  getURLInfo,
};