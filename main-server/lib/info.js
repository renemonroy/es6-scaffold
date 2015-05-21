'use strict';

const env = process.env.NODE_ENV;

const ctx = function() {
  let myCtx = '';
  switch (env) {
    case 'development' :
      myCtx = 'http://localhost:8080';
      break;
    case 'production' :
      myCtx = 'http://www.rene.mn';
      break;
  }
  return myCtx;
};

module.exports = {
  env : env,
  ctx : ctx()
};