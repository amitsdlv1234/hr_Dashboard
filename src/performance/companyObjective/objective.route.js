const express = require('express');
const router = express.Router();
const { addmyObjective, getmyObjective, updatemyObjective } = require('./objective.controller');
const { authorization } = require('../../../middlewares/tokenVerifyMiddleware');

router.post('/user/addCompanyObjective',authorization , addmyObjective);
router.get('/user/getCompanyObjective',authorization , getmyObjective);
router.put('/user/updateCompanyObjective',authorization ,updatemyObjective);

module.exports = router;
