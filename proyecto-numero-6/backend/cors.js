const cors = require('cors');

const whitelist = ['http://localhost:4000/inscripciones', 'http://example2.com'];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('No permitido por CORS'))
    }
  }
};

module.exports = cors(corsOptions);
