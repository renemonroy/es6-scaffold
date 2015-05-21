'use strict';

const app = require('koa')(),
  router = require('koa-router')(),
  logger = require('koa-logger'),
  webviews = require('./routes/web.js'),
  config = require('./config.js');

router
  .get('/', webviews.index);

app
  .use(logger())
  .use(router.routes())
  .use(router.allowedMethods());

app
  .listen(config.port, config.ip);

console.log('listening on port ' + config.port);