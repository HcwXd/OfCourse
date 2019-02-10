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
  const sql = 'SELECT r.*, u.userName, u.avatar FROM review r, user c \
               WHERE r.reviewId = ? AND r.userId = c.userId';
  const insert = [reviewId];
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
})

module.exports = {
  createReview,
  getReview,
};