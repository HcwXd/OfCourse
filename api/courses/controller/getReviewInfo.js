const reviewTable = require('../../../database/reviewTable');
module.exports = async (req, res) => {
  const reviewInfo = await reviewTable.getReview(req.params);
  res.status(200).send(reviewInfo);
};