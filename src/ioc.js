var config = require('./config');
var logging = require('./logging');
var cli = require('./cli');

var loglevel = require('loglevel');

logging.setupLogging();

function gl() {
  return logging.getLoggerForName(...arguments);
}

var commands = module.exports.commands = new cli.Commands(config);
var cli = module.exports.cli = new cli.Runner(config, commands);
