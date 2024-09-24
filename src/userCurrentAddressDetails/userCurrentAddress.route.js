const express = require('express');
const router = express.Router();
const { addAddressDetails, getAddressDetails, updateAddressDetails } = require('./userCurrentAddress.controller');
const { authorization } = require('../../middlewares/tokenVerifyMiddleware');

router.post('/user/addCurAddressDetails',authorization , addAddressDetails);
router.get('/user/getCurAddressDetails',authorization , getAddressDetails);
router.put('/user/updateCurAddressDetails',authorization ,updateAddressDetails);

module.exports = router;
