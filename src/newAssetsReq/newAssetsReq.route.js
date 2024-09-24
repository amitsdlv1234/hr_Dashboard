const express = require('express');
const router = express.Router();
const { addnewAssetsReq, getnewAssetsReq, updatenewAssetsReq } = require('./newAssetsReq.controller');
const { authorization } = require('../../middlewares/tokenVerifyMiddleware');

router.post('/user/addnewAssetsReq',authorization , addnewAssetsReq);
router.get('/user/getnewAssetsReq',authorization , getnewAssetsReq);
router.put('/user/updatenewAssetsReq',authorization ,updatenewAssetsReq);

module.exports = router;
