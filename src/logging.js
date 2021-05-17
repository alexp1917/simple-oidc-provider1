var pkgName = require('../package').name;

var loglevel = require('loglevel');

var path = require('path');

function getLoggerForName(...filenames) {
  return loglevel.getLogger([pkgName, ...filenames].join(path.sep));
}

function setupLogging(config = {}) {
  var defaultLevel = config.logging && config.logging.ROOT;
  loglevel.setDefaultLevel(defaultLevel || loglevel.levels.INFO);

  getLoggerForName('src', 'cli', 'runner').enableAll();
}

module.exports = {
  getLoggerForName,
  setupLogging,
};

// console.log(loglevel.levels)
