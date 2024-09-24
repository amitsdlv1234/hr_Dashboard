const express = require('express');
const router = express.Router();
const { addIdentityInfoDetails, getIdentityInfoDetails, updateIdentityInfoDetails } = require('./userIdentityInfo.controller');
const { authorization } = require('../../middlewares/tokenVerifyMiddleware');

router.post('/user/addIdentityInfoDetails',authorization , addIdentityInfoDetails);
router.get('/user/getIdentityInfoDetails',authorization , getIdentityInfoDetails);
router.put('/user/updateIdentityInfoDetails',authorization ,updateIdentityInfoDetails);

module.exports = router;
