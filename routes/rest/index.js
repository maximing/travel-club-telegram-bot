const express = require('express');
const ResponseMiddleware = require('@chronotech/laborx.nodejs.microservices.common/middleware/ResponseMiddleware');
const AsyncMiddlewareWrapper = require('../AsyncMiddlewareWrapper');
const _ = require('lodash');
const routes = require('require-all')({
  dirname: __dirname,
  filter: /(.+Route)\.js$/,
  map: (name) => name.replace('Route', '')
});

module.exports = (app) => {
  app.use(ResponseMiddleware);

  for (let path of Object.keys(routes)) {
    let router = express.Router();
    routes[path](router, AsyncMiddlewareWrapper);
    app.use(`/${_.kebabCase(path)}`, router);
  }
};
