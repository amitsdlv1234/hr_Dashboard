const express = require('express');
const router = express.Router();
const { addemployeeLeaveReq, getemployeeLeaveReq, updateemployeeLeaveReq } = require('./employeeLeaveReq.controller');
const { authorization } = require('../../middlewares/tokenVerifyMiddleware');

router.post('/user/addemployeeLeaveReq',authorization , addemployeeLeaveReq);
router.get('/user/getemployeeLeaveReq',authorization , getemployeeLeaveReq);
router.put('/user/updateemployeeLeaveReq',authorization ,updateemployeeLeaveReq);

module.exports = router;
