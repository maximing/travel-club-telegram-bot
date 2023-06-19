const bunyan = require('bunyan');

module.exports = name => {
  return bunyan.createLogger({
    name,
    streams: {
      level: 'info',
      path: 'runtime/logs/log.txt'
    }
  });
};
