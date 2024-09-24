const express = require('express');
const router = express.Router();
const { addContactDetails, getContactDetails, updateContactDetails } = require('./userContact.controller');
const { authorization } = require('../../middlewares/tokenVerifyMiddleware');

router.post('/user/addContactDetails',authorization , addContactDetails);
router.get('/user/getContactDetails',authorization , getContactDetails);
router.put('/user/updateContactDetails',authorization ,updateContactDetails);

module.exports = router;
