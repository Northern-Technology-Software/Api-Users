const express = require('express');
const router = express.Router();
const authCtrl = require('../controllers/authController');

router.post('/signup', authCtrl.signUp);

router.post('/signin', authCtrl.signIn);

module.exports = router;