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

createReview({
  userId: 1,
  courseId: 1,
  collectionId: 0,
  score: 3,
  text: "good",
  date: new Date(),
})


module.exports = {
  createReview,
  getReview,
  getReviews,
};