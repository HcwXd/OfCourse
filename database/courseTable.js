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

  const sql = 'select c.courseName, c.provider as courseProvider, \
              (select count(*) from review r where r.courseId = c.courseId) as courseReviewCount, \
              (select avg(r.score) from review r where r.courseId = c.courseId) as courseAvgScore \
              from course c \
              where c.courseId = ?';
  const insert = [courseId];
  const query = mysql.format(sql, insert);
  const result = await getData(query);
  return result[0];
}

/*
createCourse({
  categoryId: 1,
  courseName: "software engineering",
  level: 'easy',
  duration: '2hr',
  language: 'english',
  des: 'hello',
  provider: 'coursera',
})
*/

module.exports = {
  createCourse,
  getCourseInfo,
};