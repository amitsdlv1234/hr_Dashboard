const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../../services/database/connection');

class newAssetsReq extends Model {}

newAssetsReq.init(
  {
    userId: {
        type: DataTypes.STRING,
        unique:true,
        primaryKey:true,
        allowNull:false,
      },
      whichAsset: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
  },
  {
    sequelize, // Pass the DataTypes instance
    modelName: 'newAssetsReq',
    timestamps: false,
  }
);

// Create the table if it doesn't exist
newAssetsReq.sync({ force: false });

module.exports = newAssetsReq;

