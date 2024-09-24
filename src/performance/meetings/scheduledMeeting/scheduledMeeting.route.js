const express = require('express');
const router = express.Router();
const { addscheduledMeeting, getscheduledMeeting, updatescheduledMeeting } = require('./scheduledMeeting.controller');
const { authorization } = require('../../../../middlewares/tokenVerifyMiddleware');

router.post('/user/addscheduledMeeting',authorization , addscheduledMeeting);
router.get('/user/getscheduledMeeting',authorization , getscheduledMeeting);
router.put('/user/updatescheduledMeeting',authorization ,updatescheduledMeeting);

module.exports = router;
