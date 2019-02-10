const {
  db,
  getData,
  applyQuery
} = require('./DB');
const mysql = require('mysql');

async function createReview(reviewInfo) {
  const sql = 'INSERT INTO review SET ?';
  const insert = reviewInfo;
  const query = mysql.format(sql, insert);
  const ret = await applyQuery(query);
  return ret;
}

async function getReview(reviewId) {
  const sql = 'select u.avatar as userAvatar, u.userName, u.userId, \
               (select count(*) from review r where r.userId = 1) as userReviewCount, \
               r.score as reviewScore, r.text as reviewText, r.date as reviewDate \
               from user u, review r \
               where u.userId = r.userId and r.reviewId = ?';
  const insert = [reviewId];
  const query = mysql.format(sql, insert);
  const result = await getData(query);
  return result[0];
}

async function getReviews(courseId) {
  const sql = 'select u.avatar as userAvatar, u.userName, u.userId, \
               (select count(*) from review r where r.userId = u.userId) as userReviewCount, \
               r.score as reviewScore, r.text as reviewText, r.date as reviewDate \
               from user u, review r \
               where r.courseId = ? and u.userId = r.userId';
  const insert = [courseId];
  const query = mysql.format(sql, insert);
  const result = await getData(query);
  return result;
}
/*
createReview({
  userId: 1,
  courseId: 1,
  collectionId: 0,
  score: 3,
  text: 'CREATE TABLE user (userId int AUTO_INCREMENT, primary key (userId), userName VARCHAR(255), avatar VARCHAR(255)); \
         **review**: \
         CREATE TABLE review (reviewId int AUTO_INCREMENT, primary key (reviewId), userId int, courseId int, collectionId int, score int, text VARCHAR(1023), date VARCHAR(30)); \
         **collection**: \
         CREATE TABLE collection (collectionId int AUTO_INCREMENT, primary key (collectionId), userId int, title VARCHAR(31), head VARCHAR(4095), end VARCHAR(4095), date VARCHAR(15)); \
         **course**: \
         CREATE TABLE course (courseId int AUTO_INCREMENT, primary key(courseId), categoryId int, courseName VARCHAR(31), level VARCHAR(15), duration VARCHAR(15), language VARCHAR(15), des VARCHAR(127), courseProvider varchar(255));',
  date: new Date(),
})
*/

module.exports = {
  createReview,
  getReview,
  getReviews,
};