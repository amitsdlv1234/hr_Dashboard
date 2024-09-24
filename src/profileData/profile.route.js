const express = require('express');
const router = express.Router();
const { getprofileDetails } = require('./profile.controller');
const { authorization } = require('../../middlewares/tokenVerifyMiddleware');

router.get('/user/getprofileDetails',authorization , getprofileDetails);


module.exports = router;
