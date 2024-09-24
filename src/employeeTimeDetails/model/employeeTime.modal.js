const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../../services/database/connection');

class employeeTime extends Model {}

employeeTime.init(
  {
    userId: {
        type: DataTypes.STRING,
        unique:true,
        primaryKey:true,
        allowNull:false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      regular: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      weeklyOffPolicy: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      leavePlan: {
        type: DataTypes.STRING,
        defaultValue: '-Not Set-',
      },
      holidayCalendar: {
        type: DataTypes.STRING,
        defaultValue: 'Company Holiday Calendar',
      },
      attendanceNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      disableAttendanceTracking: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      attendanceCaptureScheme: {
        type: DataTypes.STRING,
        defaultValue: '-Not Set-',
      },
      attendanceTrackingPolicy: {
        type: DataTypes.STRING,
        defaultValue: 'Company',
      },
      shiftWeeklyOffRule: {
        type: DataTypes.STRING,
        defaultValue: '-Not Set-',
      },
      shiftAllowancePolicy: {
        type: DataTypes.STRING,
        defaultValue: '-Not Set-',
      },
      overtime: {
        type: DataTypes.STRING,
        defaultValue: '-Not Set-',
      },
    },
  {
    sequelize, // Pass the DataTypes instance
    modelName: 'employeeTime',
    timestamps: false,
  }
);

// Create the table if it doesn't exist
employeeTime.sync({ force: false });

module.exports = employeeTime;

