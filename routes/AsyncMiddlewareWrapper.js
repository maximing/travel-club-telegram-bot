const logger = require('../logger')('routes/AsyncRestMiddlewareWrapper.js');
const messages = require('@chronotech/laborx.nodejs.microservices.common/factories/messages');
const _ = require('lodash');

module.exports = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch((err) => {
    logger.error(err);

    const throws = {
      ValidationException: () =>
        res.locals.send.unprocessableEntity(messages.validation, err.validation),
      NotFoundException: () => res.locals.send.notFound(err.message || messages.notFound),
      ConflictException: () => res.locals.send.conflict(err.message || messages.conflict),
      UnauthorizedException: () =>
        res.locals.send.unauthorized(err.message || messages.unauthorized),
      ForbiddenException: () => res.locals.send.forbidden(err.message || messages.forbidden),
      InternalServerError: () => res.locals.send.internalServerError(messages.internal)
    };

    if (_.isNull(_.get(throws, err.constructor.name, null))) return throws['InternalServerError']();

    return throws[err.constructor.name]();
  });
};
