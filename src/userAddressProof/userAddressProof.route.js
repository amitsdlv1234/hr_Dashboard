const express = require('express');
const router = express.Router();
const { addAddressProofDetails, getAddressProofDetails, updateAddressProofDetails } = require('./userAddressProof.controller');
const { authorization } = require('../../middlewares/tokenVerifyMiddleware');

router.post('/user/addAddressProofDetails',authorization , addAddressProofDetails);
router.get('/user/getAddressProofDetails',authorization , getAddressProofDetails);
router.put('/user/updateAddressProofDetails',authorization ,updateAddressProofDetails);

module.exports = router;
