const express = require('express');
const router = express.Router();
const { adddoc, getdoc, updatedoc } = require('./doc.controller');
const { docAuthorization } = require('../middlewares/docAuthorization.middleware');
const upload =require('../middlewares/doc.middleware')

router.post('/user/addEmployeeletters',docAuthorization,upload.single('file') , adddoc);
router.get('/user/getEmployeeletters',docAuthorization , getdoc);
router.put('/user/updateEmployeeletters',docAuthorization,upload.single('file') ,updatedoc);

module.exports = router;
