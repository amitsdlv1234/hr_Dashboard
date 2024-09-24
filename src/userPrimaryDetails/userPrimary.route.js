const express = require('express');
const router = express.Router();
const { addPrimaryDetails, getPrimaryDetails, updatePrimaryDetails } = require('./userPrimary.controller');
const { authorization} = require('../../middlewares/tokenVerifyMiddleware');

router.post('/user/addPrimaryDetails',authorization , addPrimaryDetails);
router.get('/user/getPrimaryDetails',authorization , getPrimaryDetails);
router.put('/user/updatePrimaryDetails',authorization ,updatePrimaryDetails);

module.exports = router;
