const express = require('express');
const router = express.Router();
const bonsaiController = require('../controllers/BonsaiController');
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');
const multer = require('multer');
const uploader = multer({dest:'./public/uploads'});

router.get('/new', ensureLoggedIn('/'), bonsaiController.bonsaiNewGet);
// router.post('/edit', [ensureLoggedIn('/'), uploader.single('photo')], profileController.profileEditPost);

module.exports = router;
