const app = require('./index.js');
require('http').createServer(app).listen(process.env.PORT || 3000);