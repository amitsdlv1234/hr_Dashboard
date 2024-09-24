const express = require('express');
const router = express.Router();
const { addassignAssets, getassignAssets, updateassignAssets } = require('./assignAssets.controller');
const { authorization } = require('../../middlewares/tokenVerifyMiddleware');

router.post('/user/addassignAssets',authorization , addassignAssets);
router.get('/user/getassignAssets',authorization , getassignAssets);
router.put('/user/updateassignAssets',authorization ,updateassignAssets);

module.exports = router;
