const express = require('express');
const authController = express.Router();
const passport = require('passport');
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');

authController.get('/signup', ensureLoggedOut(), (req, res, next)  => {
  res.render('auth/signup');
});

authController.post('/signup', ensureLoggedOut(), passport.authenticate('local-signup', {
  successRedirect : '/',
  failureRedirect : '/auth/signup'
}));

authController.get('/login', ensureLoggedOut(), (req, res, next) => {
  res.render('auth/login');
});

authController.post('/login', ensureLoggedOut(), passport.authenticate('local-login', {
  successReturnToOrRedirect:'/',
  failureRedirect : '/auth/login'
}));

authController.get('/logout', ensureLoggedIn('/'), (req,res)=>{
  req.logout();
  res.redirect('/');
});

module.exports = authController;
