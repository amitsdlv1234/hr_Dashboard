const express = require('express');
const router = express.Router();
const { addAddressDetails, getAddressDetails, updateAddressDetails } = require('./userPermanentAddress.controller');
const { authorization } = require('../../middlewares/tokenVerifyMiddleware');

router.post('/user/addPerAddressDetails',authorization , addAddressDetails);
router.get('/user/getPerAddressDetails',authorization , getAddressDetails);
router.put('/user/updatePerAddressDetails',authorization ,updateAddressDetails);

module.exports = router;
