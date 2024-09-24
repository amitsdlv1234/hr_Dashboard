const express = require('express');
const router = express.Router();
const { addemployeeAttendance, getemployeeAttendance, updateemployeeAttendance } = require('./employeeAttendance.controller');
const { authorization } = require('../../middlewares/tokenVerifyMiddleware');

router.post('/user/addemployeeAttendanceReq',authorization , addemployeeAttendance);
router.get('/user/getemployeeAttendanceReq',authorization , getemployeeAttendance);
router.put('/user/updateemployeeAttendanceReq',authorization ,updateemployeeAttendance);

module.exports = router;
