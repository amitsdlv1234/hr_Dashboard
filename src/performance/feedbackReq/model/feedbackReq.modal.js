const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../../../services/database/connection');

class feedbackReq extends Model {}

feedbackReq.init(
  {
    userId: {
        type: DataTypes.STRING,
      },
      date: {
        type: DataTypes.STRING,
      },
      feedbackFrom: {
        type: DataTypes.STRING,
      },
      project: {
        type: DataTypes.STRING,
      },
      coreValue: {
        type: DataTypes.STRING,
      },
      note: {
        type: DataTypes.TEXT,
      },
  },
  {
    sequelize, // Pass the DataTypes instance
    modelName: 'feedbackReq',
    timestamps: false,
  }
);

// Create the table if it doesn't exist
feedbackReq.sync({ force: false });

module.exports = feedbackReq;

