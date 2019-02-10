const reviewTable = require('../../../database/reviewTable');
module.exports = async (req, res) => {
  const reviewId = req.params.reviewId;
  const reviewInfo = await reviewTable.getReview(reviewId);
  res.status(200).send(reviewInfo);
};