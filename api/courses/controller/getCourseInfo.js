const courseTable = require('../../../database/courseTable');
module.exports = async (req, res) => {
  const courseId = req.params.courseId;
  console.log(courseId);
  const courseInfo = await courseTable.getCourseInfo(courseId);
  res.status(200).json(courseInfo);
};