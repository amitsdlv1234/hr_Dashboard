const express = require('express');
const router = express.Router();
const { addemployeeTime, getemployeeTime, updateemployeeTime } = require('./employeeTime.controller');
const { authorization } = require('../../middlewares/tokenVerifyMiddleware');

router.post('/user/addemployeeTime',authorization , addemployeeTime);
router.get('/user/getemployeeTime',authorization , getemployeeTime);
router.put('/user/updateemployeeTime',authorization ,updateemployeeTime);

module.exports = router;
