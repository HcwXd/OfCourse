module.exports = function(app) {
  app.use('/courses', require('./api/courses'));
};
