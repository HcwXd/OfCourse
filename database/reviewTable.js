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

async function getReview(reviewInfo) {
  const reviewId = reviewInfo.reviewId;
  const userId = reviewInfo.userId;
  const sql = 'select u.avatar as userAvatar, u.userName, \
               (select count(*) from review r where r.userId = 1) as userReviewCount, \
               r.score as reviewScore, r.text as reviewText, r.date as reviewDate \
               from user u, review r \
               where u.userId = ? and r.reviewId = ?';
  const insert = [userId, reviewId];
  const query = mysql.format(sql, insert);
  const result = await getData(query);
  return result[0];
}

/*
createReview({
  userId: 1,
  courseId: 1,
  collectionId: 0,
  score: 3,
  text: "good",
})
*/

module.exports = {
  createReview,
  getReview,
};