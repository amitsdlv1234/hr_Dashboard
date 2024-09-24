const express = require('express');
const router = express.Router();
const { addRelationDetails, getRelationDetails, updateRelationDetails } = require('./userRelation.controller');
const { authorization } = require('../../middlewares/tokenVerifyMiddleware');

router.post('/user/addRelationDetails',authorization , addRelationDetails);
router.get('/user/getRelationDetails',authorization , getRelationDetails);
router.put('/user/updateRelationDetails',authorization ,updateRelationDetails);

module.exports = router;
