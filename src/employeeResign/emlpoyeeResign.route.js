const express = require('express');
const router = express.Router();
const { addemployeeResign, getemployeeResign, updateemployeeResign } = require('./emlpoyeeResign.controller');
const { authorization } = require('../../middlewares/tokenVerifyMiddleware');

router.post('/user/addemployeeResign',authorization , addemployeeResign);
router.get('/user/getemployeeResign',authorization , getemployeeResign);
router.put('/user/updateemployeeResign',authorization ,updateemployeeResign);

module.exports = router;
