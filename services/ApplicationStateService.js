const config = require('../config');

const STATUSES = {
  200: { status: 'ok' },
  500: { status: 'error' }
};

class ApplicationStateService {
  static init() {
    ApplicationStateService.code = 200;
    ApplicationStateService.status = STATUSES[this.code];
  }

  static error(logger, error) {
    logger.error(error);
    ApplicationStateService.code = 500;
    ApplicationStateService.status = STATUSES[this.code];

    if (config.environment !== 'prod') process.exit(1);
  }
}

module.exports = ApplicationStateService;
