const mongoose = require('mongoose');
const config = require('../config');
const logger = require('../logger')('controllers/MongooseController.js');
const ApplicationStateService = require('../services/ApplicationStateService');

class MongooseController {
  static async connect() {
    try {
      mongoose.set('debug', config.mongo.debug);

      await mongoose.connect(config.mongo.uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });

      mongoose.connection.on('error', e => {
        ApplicationStateService.error(logger, e);
      });
    } catch (e) {
      ApplicationStateService.error(logger, e);
    }
  }
}

module.exports = MongooseController;
