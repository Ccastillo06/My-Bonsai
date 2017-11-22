const app = require('express')();
require('dotenv').load();
require('./config/passport')();
require('./config/express')(app);
require('./config/expresscontroller')(app);
require('./routes/main-router')(app);
require('./config/error-handler')(app);

module.exports = app;
