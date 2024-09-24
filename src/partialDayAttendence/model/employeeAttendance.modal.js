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
      partialDayAttendance: {
        type: DataTypes.STRING,
      },
      lateTime: {
        type: DataTypes.TIME,
      },
      resion: {
        type: DataTypes.STRING,
      },
      employee: {
        type: DataTypes.STRING,
      },
  },
  {
    sequelize, // Pass the DataTypes instance
    modelName: 'employeepartialDayAttendance',
    timestamps: false,
  }
);

// Create the table if it doesn't exist
employeeAttendance.sync({ force: false });

module.exports = employeeAttendance;

