const express = require('express');
const router = express.Router();
const profileController = require('../controllers/ProfileController');
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');
const multer = require('multer');
const uploader = multer({dest:'./public/uploads'});

router.get('/', ensureLoggedIn('/'), profileController.profileGet);

router.get('/edit', ensureLoggedIn('/'), profileController.profileEditGet);
router.post('/edit', [ensureLoggedIn('/'), uploader.single('photo')], profileController.profileEditPost);

module.exports = router;
