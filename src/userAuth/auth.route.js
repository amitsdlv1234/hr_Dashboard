const express = require('express');
const router = express.Router();
const { login,loggedIn, signIn, accountVerfy, otpVerify, passwordLogin, changePassword, createPassword } = require('./auth.controller');
const {auth} =require('../../middlewares/tokenVerifyMiddleware')

router.post('/auth/otp/signIn',signIn);
router.post('/auth/otp/accountVerify',accountVerfy);
router.post('/auth/otp/otpVerify',otpVerify);
router.post('/auth/otp/createPassword',createPassword);
router.post('/auth/otp/send', login );
router.put('/auth/otp/changepass',auth,changePassword);
router.post('/auth/otp/password',passwordLogin);
router.post('/auth/otp/verify', loggedIn);

module.exports = router;
