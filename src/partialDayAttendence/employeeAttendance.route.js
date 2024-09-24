const express = require('express');
const router = express.Router();
const { addemployeeAttendance, getemployeeAttendance, updateemployeeAttendance } = require('./employeeAttendance.controller');
const { authorization } = require('../../middlewares/tokenVerifyMiddleware');

router.post('/user/addemployeePartialDayAttendance',authorization , addemployeeAttendance);
router.get('/user/getemployeePartialDayAttendance',authorization , getemployeeAttendance);
router.put('/user/updateemployeePartialDayAttendance',authorization ,updateemployeeAttendance);

module.exports = router;
