'use strict';

const env = process.env.NODE_ENV;
let config = null;

switch (env) {
  case 'development' :
    config = {
      env : "development",
      ip : "127.0.0.1",
      port : "8080"
    };
    break;
}

module.exports = config;