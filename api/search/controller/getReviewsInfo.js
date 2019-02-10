const reviewTable = require('../../../database/reviewTable');
module.exports = async (req, res) => {
  const courseId = req.params.courseId;
  const reviewInfo = await reviewTable.getReviews(courseId);
  res.status(200).send(reviewInfo);
};