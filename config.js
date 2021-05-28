function parseArgv(criteria, format, ...aliases) {
  for (var i = 0; i < aliases.length; i++) {
    var alias = aliases[i];

    for (var j = 0; j < process.argv.length; j++) {
      var arg = process.argv[j];

      if (arg.toLowerCase() === alias) {
        var nextVal = process.argv[j + 1];
        if (criteria(nextVal)) {
          return format(nextVal);
        }
      }
    }
  }

  return false;
}

var isNum = e => !isNaN(e);

function cliNum(...aliases) {
  return parseArgv(isNum, Number, ...aliases);
}

module.exports = {
  port: cliNum('-p', '--port') || process.env.PORT || 3000,
  logging: {
    /*
      see:
      https://github.com/pimterry/loglevel/blob/
        342f103eed48f29db854533d2cbfe254690f9113/lib/loglevel.js#L184

      { "TRACE": 0, "DEBUG": 1, "INFO": 2, "WARN": 3, "ERROR": 4, "SILENT": 5}
     */
    level: {
      // used for default value, see https://stackoverflow.com/a/31294905
      ROOT: 2,
      // set any loggers here like:
      // 'logger-name': level,
    },
  },
};
