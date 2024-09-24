const express = require('express');
const router = express.Router();
const { addexpense, getexpense, updateexpense } = require('./expense.controller');
const { authorization } = require('../../../middlewares/tokenVerifyMiddleware');

router.post('/user/addexpense',authorization , addexpense);
router.get('/user/getexpense',authorization , getexpense);
router.put('/user/updateexpense',authorization ,updateexpense);

module.exports = router;
