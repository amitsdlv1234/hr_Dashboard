const express = require('express');
const router = express.Router();
const { getheaderDetails } = require('./header.controller');
const { authorization } = require('../../middlewares/tokenVerifyMiddleware');

router.get('/user/getheaderDetails',authorization , getheaderDetails);


module.exports = router;
