const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');
const multer = require('multer');
const uploader = multer({dest:'./public/uploads'});

router.get('/signup', ensureLoggedOut(), AuthController.signUpGet);

router.post('/signup', [ensureLoggedOut(), uploader.single('photo')] , AuthController.signUpPost);

router.get('/login', ensureLoggedOut(), AuthController.loginGet);

router.post('/login', ensureLoggedOut(), AuthController.loginPost);

router.get('/logout', ensureLoggedIn('/'), AuthController.logout);

module.exports = router;
