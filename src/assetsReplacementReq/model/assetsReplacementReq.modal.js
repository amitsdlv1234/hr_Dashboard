const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../../services/database/connection');

class assetsReplacementReq extends Model {}

assetsReplacementReq.init(
  {
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    userId: {
        type: DataTypes.STRING,
        allowNull:false,
      },
      whichAsset: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      requirement:{
        type:DataTypes.STRING
      }
  },
  {
    sequelize, // Pass the DataTypes instance
    modelName: 'assetsReplacementReq',
    timestamps: false,
  }
);

// Create the table if it doesn't exist
assetsReplacementReq.sync({ force: false });

module.exports = assetsReplacementReq;

