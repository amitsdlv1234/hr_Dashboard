const express = require('express');
const router = express.Router();
const { addEducationDetails, getEducationDetails, updateEducationDetails } = require('./userEducation.controller');
const { authorization } = require('../../middlewares/tokenVerifyMiddleware');

router.post('/user/addEducationDetails',authorization , addEducationDetails);
router.get('/user/getEducationDetails',authorization , getEducationDetails);
router.put('/user/updateEducationDetails',authorization ,updateEducationDetails);

module.exports = router;
