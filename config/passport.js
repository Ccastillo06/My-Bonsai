const passport = require("passport");
const flash = require("connect-flash");
const bcrypt = require('bcrypt');
const User = require('../models/User');
const dotenv = require ("dotenv").load();
const LocalStrategy = require("passport-local").Strategy;
const session = require('express-session');

module.exports = function (){
  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });

  passport.deserializeUser((id, cb) => {

    User.findById(id, (err, user) => {
      if (err) { return cb(err); }
      cb(null, user);
    });
  });

  passport.use('local-signup', new LocalStrategy(
    { passReqToCallback: true },
    (req, username, password, next) => {
      process.nextTick(() => {
          User.findOne({
              'username': username
          }, (err, user) => {
              if (err){ return next(err); }
              if (user) { return next(null, false); }
              else {
                  const { username, password, email, name } = req.body;
                  const location = {
                    city: req.body.city,
                    lat: req.body.lat,
                    lng: req.body.lng,
                  };
                  const hashPass = bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
                  let photo = '';
                  (req.file)? photo = req.file.filename : photo = 'logo.png';
                  const newUser = new User({username, email, password: hashPass, name, photo, location});

                  newUser.save((err) => {
                      if (err){ next(err); }
                      return next(null, newUser);
                  });
              }
          });
      });
  }));


  passport.use('local-login', new LocalStrategy((username, password, next) => {
    User.findOne({ username:username }, (err, user) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        return next(null, false, { message: "Incorrect username" });
      }
      if (!bcrypt.compareSync(password, user.password)) {
        return next(null, false, { message: "Incorrect password" });
      }
      return next(null, user);
    });
  }));
};
