const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../../services/database/connection');

class UserAddressProofDetails extends Model {}

UserAddressProofDetails.init(
  {
    userId: {
        type: DataTypes.STRING,
        unique:true,
        primaryKey:true,
        allowNull:false,
      },
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    idType: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    idNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    enrollmentNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dateOfBirth: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    fullName: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    address:{
        type:DataTypes.STRING,
    },
    gender:{
        type:DataTypes.STRING
    }
  },
  {
    sequelize, // Pass the DataTypes instance
    modelName: 'UserAddressProofDetails',
    timestamps: false,
  }
);

// Create the table if it doesn't exist
UserAddressProofDetails.sync({ force: false });

module.exports = UserAddressProofDetails;

