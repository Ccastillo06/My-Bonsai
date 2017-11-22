const index = require('./index');
const auth = require('./auth');
const profile = require('./profile');
const bonsai = require('./bonsai');

module.exports = (app) => {
  app.use('/', index);
  app.use('/', auth);
  app.use('/profile', profile);
  app.use('/bonsai', bonsai);
};
