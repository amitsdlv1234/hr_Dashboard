const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../../services/database/connection');

class UserContactDetails extends Model {}

UserContactDetails.init(
  {
    userId: {
        type: DataTypes.STRING,
        unique:true,
        primaryKey:true,
        allowNull:false,
      },
    workEmail: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  personalEmail:{
    type:DataTypes.STRING,
  },
  mobileNo: {
    type: DataTypes.BIGINT,
  },
  workPhone: {
    type: DataTypes.BIGINT,
  },
  residencePhone: {
    type: DataTypes.BIGINT,
  },
  skype: {
    type: DataTypes.STRING,
  },
  },
  {
    sequelize, // Pass the DataTypes instance
    modelName: 'UserContactDetails',
    timestamps: false,
  }
);

// Create the table if it doesn't exist
UserContactDetails.sync({ force: false });

module.exports = UserContactDetails;

