const express = require('express');
const router = express.Router();
const bonsaiController = require('../controllers/BonsaiController');
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');
const multer = require('multer');
const uploader = multer({dest:'./public/uploads'});

router.get('/new', ensureLoggedIn('/'), bonsaiController.bonsaiNewGet);
router.post('/new', [ensureLoggedIn('/'), uploader.single('photo')], bonsaiController.bonsaiNewPost);

router.get('/collection', ensureLoggedIn('/'), bonsaiController.bonsaiCollectionGet);
module.exports = router;
