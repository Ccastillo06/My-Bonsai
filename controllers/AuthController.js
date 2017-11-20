const User = require("../models/User");
const passport = require("passport");

module.exports = {
  // Sign Up Controllers.
  signUpGet: (req, res, next)  => { res.render('auth/signup');},
  signUpPost: passport.authenticate('local-signup', {
    successRedirect : '/',
    failureRedirect : '/signup'
  }),
  // Login Controllers.
  loginGet: (req, res, next) => {res.render('auth/login');},
  loginPost: passport.authenticate('local-login', {
    successReturnToOrRedirect:'/profile',
    failureRedirect : '/login'
  }),
  // Logout Controller.
  logout: (req,res)=>{ req.logout(); res.redirect('/');},
};
