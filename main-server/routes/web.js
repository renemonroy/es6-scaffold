'use strict';

const render = require('../lib/render.js'),
  info = require('../lib/info.js');

module.exports = {

  index : function *(next) {
    this.body = yield render('index', {
      info : JSON.stringify(info)
    });
  }

};