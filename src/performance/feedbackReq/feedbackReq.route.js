const express = require('express');
const router = express.Router();
const { addfeedbackReq, getfeedbackReq, updatefeedbackReq } = require('./feedbackReq.controller');
const { authorization } = require('../../../middlewares/tokenVerifyMiddleware');

router.post('/user/addfeedbackReq',authorization , addfeedbackReq);
router.get('/user/getfeedbackReq',authorization , getfeedbackReq);
router.put('/user/updatefeedbackReq',authorization ,updatefeedbackReq);

module.exports = router;
