const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../../../../services/database/connection');

class scheduledMeeting extends Model {}

scheduledMeeting.init(
  {
    userId: {
        type: DataTypes.STRING,
      },
      date: {
        type: DataTypes.STRING,
      },
      status:{
        type:DataTypes.STRING,
        defaultValue:"Requested",
      },
      employee_1: {
        type: DataTypes.STRING,
      },
      employee_2: {
        type: DataTypes.STRING,
      },
      title: {
        type: DataTypes.STRING,
      },
      platform: {
        type: DataTypes.STRING,
      },
      startTime: {
        type: DataTypes.TIME,
      },
      duration:{
        type:DataTypes.TIME,
      },
      endTime: {
        type: DataTypes.TIME,
      },
      mettingFrequency: {
        type: DataTypes.STRING,
      },
      points: {
        type: DataTypes.TEXT,
      },
      actionItems: {
        type: DataTypes.TEXT,
      },
      summary: {
        type: DataTypes.TEXT,
      },
      objective: {
        type: DataTypes.TEXT,
      },
  },
  {
    sequelize, // Pass the DataTypes instance
    modelName: 'meeting',
    timestamps: false,
  }
);

// Create the table if it doesn't exist
scheduledMeeting.sync({ force: false });

module.exports = scheduledMeeting;

