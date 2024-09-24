const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../../services/database/connection');

class employeeAttendance extends Model {}

employeeAttendance.init(
  {
    userId: {
        type: DataTypes.STRING,
      },
      date: {
        type: DataTypes.DATEONLY,
      },
      day: {
        type: DataTypes.STRING,
      },
      grossHours: {
        type: DataTypes.TIME,
      },
      effectiveHours: {
        type: DataTypes.TIME,
      },
      shiftSchedule: {
        type: DataTypes.STRING,
      }, 
  },
  {
    sequelize, // Pass the DataTypes instance
    modelName: 'otheremployeeAttendance',
    timestamps: false,
  }
);

// Create the table if it doesn't exist
employeeAttendance.sync({ force: false });

module.exports = employeeAttendance;

