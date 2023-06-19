const express = require('express');
const config = require('./config');
const routesRest = require('./routes/rest');
const logger = require('./logger')('index.js');
const MongooseController = require('./controllers/MongooseController');
const packageJson = require('./package.json');
const ApplicationStateService = require('./services/ApplicationStateService');

const listen = () => {
  const app = express();
  app.use(express.json());
  app.get('/health-check', (req, res) => {
    res.statusCode = ApplicationStateService.code;
    res.send(ApplicationStateService.status);
  });

  routesRest(app);
  logger.info(
    `Application Init OK. App version ${packageJson.version}. Node.js version ${process.version}`
  );
  return app.listen(config.http.port, () => {
    logger.info('App listening', { port: config.http.port });
  });
};

const init = async () => {
  ApplicationStateService.init();
  await MongooseController.connect();
  return listen();
};

process.on('unhandledRejection', e => {
  ApplicationStateService.error(logger, e);
});
process.on('unhandledException', e => {
  ApplicationStateService.error(logger, e);
});

module.exports = init();
