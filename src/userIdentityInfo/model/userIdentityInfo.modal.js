const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../../services/database/connection');

class UserIdentityInfoDetails extends Model {}

UserIdentityInfoDetails.init(
  {
    userId: {
        type: DataTypes.STRING,
        unique:true,
        primaryKey:true,
        allowNull:false,
      },
      idType: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    verified: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false, // Assuming initially not verified
    },
    idNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dateOfBirth: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    parentsName: {
        type: DataTypes.STRING,
        allowNull: true, // Parent's name might be optional
    },
  },
  {
    sequelize, // Pass the DataTypes instance
    modelName: 'UserIdentityInfoDetails',
    timestamps: false,
  }
);

// Create the table if it doesn't exist
UserIdentityInfoDetails.sync({ force: false });

module.exports = UserIdentityInfoDetails;

