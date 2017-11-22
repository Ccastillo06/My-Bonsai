const express = require('express');
const router = express.Router();
const bonsaiController = require('../controllers/BonsaiController');
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');
const multer = require('multer');
const uploader = multer({dest:'./public/uploads'});

router.get('/new', ensureLoggedIn('/'), bonsaiController.bonsaiNewGet);
router.post('/new', [ensureLoggedIn('/'), uploader.single('photo')], bonsaiController.bonsaiNewPost);

router.get('/maintenance/:id', ensureLoggedIn('/'), bonsaiController.bonsaiMaintenanceGet);
router.post('/maintenance/:id', [ensureLoggedIn('/'), uploader.single('photo')], bonsaiController.bonsaiMaintenancePost);

router.get('/collection', ensureLoggedIn('/'), bonsaiController.bonsaiCollectionGet);

router.get('/collection/:id', ensureLoggedIn('/'), bonsaiController.bonsaiDetailsGet);

module.exports = router;
