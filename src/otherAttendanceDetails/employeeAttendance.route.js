const express = require('express');
const router = express.Router();
const { addemployeeAttendance, getemployeeAttendance, updateemployeeAttendance } = require('./employeeAttendance.controller');
const { authorization } = require('../../middlewares/tokenVerifyMiddleware');

router.post('/user/addemployeeOtherAttendance',authorization , addemployeeAttendance);
router.get('/user/getemployeeOtherAttendance',authorization , getemployeeAttendance);
router.put('/user/updateemployeeOtherAttendance',authorization ,updateemployeeAttendance);

module.exports = router;
