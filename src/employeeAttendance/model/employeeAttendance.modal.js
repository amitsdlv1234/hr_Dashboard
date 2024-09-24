const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../../services/database/connection');

class employeeAttendance extends Model {}

employeeAttendance.init(
  {
    userId: {
        type: DataTypes.STRING,
      },
      date: {
        type: DataTypes.STRING,
      },
      webClockIn: {
        type: DataTypes.STRING,
      },
      webClockOut: {
        type: DataTypes.STRING,
      },
  },
  {
    sequelize, // Pass the DataTypes instance
    modelName: 'employeeAttendance',
    timestamps: false,
  }
);

// Create the table if it doesn't exist
employeeAttendance.sync({ force: false });

module.exports = employeeAttendance;

