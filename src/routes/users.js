const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/userController');
const utils = require('../utils/verifytoken')

router.get('/:email', utils.verifyToken, userCtrl.getUser);

router.get('/', utils.verifyToken, userCtrl.getUsers);

//router.put('/updateuser/:id', utils.verifyToken, userCtrl.updateUser);

//router.put('/updatepassword/:id', utils.verifyToken, userCtrl.updatePassword)

//router.delete('/delete/:id', utils.verifyToken, userCtrl.deleteUser);


module.exports = router;