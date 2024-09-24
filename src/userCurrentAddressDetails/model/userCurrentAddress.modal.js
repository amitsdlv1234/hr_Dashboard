const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../../services/database/connection');

class UserCurrentAddressDetails extends Model {}

UserCurrentAddressDetails.init(
  {
    userId: {
        type: DataTypes.STRING,
        unique:true,
        primaryKey:true,
        allowNull:false,
      },
      addressLine1: {
        type: DataTypes.STRING,
      },
      addressLine2: {
        type: DataTypes.STRING,
      },
      city: {
        type: DataTypes.STRING,
      },
      state: {
        type: DataTypes.STRING,
      },
      country: {
        type: DataTypes.STRING,
      },
      pin: {
        type: DataTypes.INTEGER,
      },
  },
  {
    sequelize, // Pass the DataTypes instance
    modelName: 'UserCurrentAddressDetails',
    timestamps: false,
  }
);

// Create the table if it doesn't exist
UserCurrentAddressDetails.sync({ force: false });

module.exports = UserCurrentAddressDetails;

