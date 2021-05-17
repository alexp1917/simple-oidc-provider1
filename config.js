module.exports = {
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
