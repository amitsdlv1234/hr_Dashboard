const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../../services/database/connection');

class employeeResign extends Model {}

employeeResign.init(
  {
    userId: {
        type: DataTypes.STRING,
        allowNull:false,
      },
      decision: {
        type: DataTypes.STRING
      },
      resion: {
        type: DataTypes.STRING,
      },
      comment: {
        type: DataTypes.STRING
      },
      
  },
  {
    sequelize, // Pass the DataTypes instance
    modelName: 'employeeResign'
  }
);

// Create the table if it doesn't exist
employeeResign.sync({ force: false });

module.exports = employeeResign;

