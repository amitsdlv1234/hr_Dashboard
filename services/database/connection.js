const Sequelize = require('sequelize');
const dotenv = require("dotenv");
dotenv.config();

// Define the database connection details
const PORT = process.env.PORT;
const HOST=process.env.HOST;
const DATABASE_NAME=process.env.DATABASE_NAME;
const DATABASE_USER=process.env.DATABASE_USER;
const DATABASE_PASSWORD=process.env.DATABASE_PASSWORD;

const sequelize = new Sequelize(DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD, {
    host: HOST,
    dialect: 'mysql', // Assuming MySQL
    port: PORT, // Port number for MySQL

    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    },

    logging: true // Enable logging
});

module.exports = sequelize;
