const express = require('express');
const router = express.Router();
const { addemployeejobDetail, getemployeejobDetail, updateemployeejobDetail } = require('./jobDetails.controller');
const { authorization } = require('../../middlewares/tokenVerifyMiddleware');

router.post('/user/addemployeejobDetail',authorization , addemployeejobDetail);
router.get('/user/getemployeejobDetail',authorization , getemployeejobDetail);
router.put('/user/updateemployeejobDetail',authorization ,updateemployeejobDetail);

module.exports = router;
