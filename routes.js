module.exports = function(app) {
  app.use('/courses', require('./api/courses'));
  app.use('/search', require('./api/search'));
  app.use('/users', require('./api/users'));
};
