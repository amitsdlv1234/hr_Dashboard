const express = require('express');
const router = express.Router();
const { addOrganization, getOrganization, updateOrganization } = require('./organization.controller');
const { authorization } = require('../../middlewares/tokenVerifyMiddleware');

router.post('/user/addOrganization',authorization , addOrganization);
router.get('/user/getOrganization',authorization , getOrganization);
router.put('/user/updateOrganization',authorization ,updateOrganization);

module.exports = router;
