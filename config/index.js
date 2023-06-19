require('dotenv').config();

module.exports = {
  id: process.env.ID || 'travel-club-bot-service',
  host: process.env.HOST || 'localhost',
  environment: process.env.ENVIRONMENT || 'dev',
  http: {
    port: process.env.REST_PORT ? parseInt(process.env.REST_PORT) : 8081
  },
  mongo: {
    uri: process.env.MONGO_URI || 'mongodb://localhost:27017/listener',
    debug: (process.env.MONGO_DEBUG || 'false') === 'true'
  },
  logger: {
    level: process.env.LOG_LEVEL || 'info'
  }
};
