const express = require('express');
const router = express.Router();
const { addmyObjective, getmyObjective, updatemyObjective } = require('./objective.controller');
const { authorization } = require('../../../middlewares/tokenVerifyMiddleware');

router.post('/user/addmyObjective',authorization , addmyObjective);
router.get('/user/getmyObjective',authorization , getmyObjective);
router.put('/user/updatemyObjective',authorization ,updatemyObjective);

module.exports = router;
