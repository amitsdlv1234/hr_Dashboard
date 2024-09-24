const express = require('express');
const router = express.Router();
const { addmyObjective, getmyObjective, updatemyObjective } = require('./objective.controller');
const { authorization } = require('../../../middlewares/tokenVerifyMiddleware');

router.post('/user/addDepartmentObjective',authorization , addmyObjective);
router.get('/user/getDepartmentObjective',authorization , getmyObjective);
router.put('/user/updateDepartmentObjective',authorization ,updatemyObjective);

module.exports = router;
