const express = require('express');
const router = express.Router();
const { addassetsReplacementReq, getassetsReplacementReq, updateassetsReplacementReq } = require('./assetsReplacementReq.controller');
const { authorization } = require('../../middlewares/tokenVerifyMiddleware');

router.post('/user/addassetsReplacementReq',authorization , addassetsReplacementReq);
router.get('/user/getassetsReplacementReq',authorization , getassetsReplacementReq);
router.put('/user/updateassetsReplacementReq',authorization ,updateassetsReplacementReq);

module.exports = router;
