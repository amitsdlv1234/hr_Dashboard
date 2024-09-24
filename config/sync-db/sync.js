const sequelize = require('../../services/database/connection');
const User = require('../../src/user/modal/user.modal');

// Add all your models here
const models = [User, Post];

const syncDatabase = async () => {
  try {
    // Synchronize all models
    await sequelize.sync({ force: false }); // Set force to true if you want to drop and recreate the tables

    console.log('Database synchronized successfully.');
  } catch (error) {
    console.error('Error synchronizing database:', error.message);
  }
};

// Run the script to sync the database
syncDatabase();
