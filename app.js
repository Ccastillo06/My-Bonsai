const app = require('express')();
require('dotenv').load();
require('./config/passport')();
require('./config/express')(app);
require('./config/expresscontroller')(app);

// Get into a routes file to require later.
const index = require('./routes/index');
const auth = require('./routes/auth');
const profile = require('./routes/profile');
app.use('/', index);
app.use('/', auth);
app.use('/profile', profile);

require('./config/error-handler')(app);

module.exports = app;
