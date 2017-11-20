const express = require('express');
const router = express.Router();
const profileController = require('../controllers/ProfileController');
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');

router.get('/', ensureLoggedIn('/'), profileController.profileGet);

module.exports = router;
