var config = null;

switch (process.env.NODE_ENV) {
  case 'development' :
    config = {
      ip : '127.0.0.1',
      port : '8081'
    };
    break;
}

module.exports = config;