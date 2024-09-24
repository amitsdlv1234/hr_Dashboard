const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../../services/database/connection');

class assignAssets extends Model {}

assignAssets.init(
  {
    userId: {
        type: DataTypes.STRING,
      },
      assetType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      assetName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      assetId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      assetCategory: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      assignedOn: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      acknowledgementStatus: {
        type: DataTypes.ENUM('Acknowledged', 'Not Acknowledged'),
        allowNull: false,
        defaultValue: 'Not Acknowledged',
      },
      currentCondition: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      actions: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  },
  {
    sequelize, // Pass the DataTypes instance
    modelName: 'assignAssets',
    timestamps: false,
  }
);

// Create the table if it doesn't exist
assignAssets.sync({ force: false });

module.exports = assignAssets;

