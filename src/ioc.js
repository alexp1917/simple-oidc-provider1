var middleware = require('./middleware');
var config = require('../config');
var logging = require('./logging');
var makeRoutes = require('./routes');

var loglevel = require('loglevel');

logging.setupLogging();

function gl() {
  return logging.getLoggerForName(...arguments);
}

module.exports.config = config;
module.exports.makeApp = function makeApp(app) {
  middleware.makeAppMiddleware(app);
  makeRoutes(app);
  middleware.makeAppErrorHandlers(app);
  return app;
};
