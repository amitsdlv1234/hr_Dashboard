const express = require('express');
const router = express.Router();
const { addemployeeAttendance, getemployeeAttendance, updateemployeeAttendance } = require('./employeeAttendance.controller');
const { authorization } = require('../../middlewares/tokenVerifyMiddleware');

router.post('/user/addemployeeAttendance',authorization , addemployeeAttendance);
router.get('/user/getemployeeAttendance',authorization , getemployeeAttendance);
router.put('/user/updateemployeeAttendance',authorization ,updateemployeeAttendance);

module.exports = router;
