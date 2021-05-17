var Indenter = require('./indenter');
var logging = require('../logging');

function Runner(config, commands) {
  this.config = config;
  this.commands = commands;

  this.log = logging.getLoggerForName('src', 'cli', 'runner');
}

Runner.prototype.run = async function(argv, commands) {
  if (!argv || !argv.length)
    return this.printUsage();

  this.commands = commands;
};

Runner.prototype.printUsage = function() {
  this.log.info('Usage:');
  var indenter = new Indenter(this.log.info);
  indenter.write('Commands:');
  indenter.level++;
  indenter.write('world');
};

module.exports = Runner;

logging.setupLogging();
new Runner().printUsage();