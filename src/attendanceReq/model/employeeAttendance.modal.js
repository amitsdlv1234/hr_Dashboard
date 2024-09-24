const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../../services/database/connection');

class employeeAttendanceReq extends Model {}

employeeAttendanceReq.init(
  {
    userId: {
        type: DataTypes.STRING,
      },
      date: {
        type: DataTypes.DATEONLY,
      },
      request: {
        type: DataTypes.STRING,
      },
      requestedOn: {
        type: DataTypes.STRING,
      },
      note: {
        type: DataTypes.TEXT,
      },
      reason: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.STRING,
        default:'Pending'
      },
      lastActionBy: {
        type: DataTypes.STRING,
      }, 
      nextApprover: {
        type: DataTypes.STRING,
      },
      actionComment: {
        type: DataTypes.TEXT,
      },
  },
  {
    sequelize, // Pass the DataTypes instance
    modelName: 'employeeAttendanceReq',
    timestamps: false,
  }
);

// Create the table if it doesn't exist
employeeAttendanceReq.sync({ force: false });

module.exports = employeeAttendanceReq;

