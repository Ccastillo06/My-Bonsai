const app = require('express')();
require('dotenv').load();
require('./config/passport')();
require('./config/express')(app);
require('./config/expresscontroller')(app);

const index = require('./routes/index');
const authController = require('./routes/authController');
app.use('/', index);
app.use('/auth', authController);

require('./config/error-handler')(app);

module.exports = app;
