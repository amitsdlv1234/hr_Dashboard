const dotenv = require("dotenv");
dotenv.config();

const PORT = 8808;
const MYSQL_STRING = "mysql://root:admin@mysql-pass@ec2-43-205-22-253.ap-south-1.compute.amazonaws.com/keka";
const REDIS_PORT = process.env.REDIS_PORT;
const REDIS_URI = process.env.REDIS_URI;



// Configration function

const redisConfig = {
   PORT:REDIS_PORT , host:REDIS_URI
}

module.exports = {
  MYSQL_STRING,
  PORT,
  REDIS_PORT,
  REDIS_URI,
  redisConfig,
};