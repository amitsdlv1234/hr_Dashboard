const dotenv = require('dotenv');

dotenv.config();

exports.SECREAT_TOKEN_FOR_JWT = process.env.SECRETKEY;
exports.FRONTEND_URL = process.env.FRONTEND_URL;