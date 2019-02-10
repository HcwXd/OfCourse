const reviewTable = require('../../database/reviewTable');
module.exports = (reviewId) => {
  return reviewTable.getReview(reviewId);
};