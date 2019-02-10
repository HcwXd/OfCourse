const reviewTable = require('../../../database/reviewTable');
module.exports = async (req, res) => {
  const reviewInfo = await reviewTable.getReview(req.params);
  res.staus(200).send(reviewInfo);
};