const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../../services/database/connection');

class UserPrimaryDetails extends Model {}

UserPrimaryDetails.init(
  {
    userId: {
        type: DataTypes.STRING,
        unique:true,
        primaryKey:true,
        allowNull:false,
      },
    firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  middleName:{
    type:DataTypes.STRING,
  },
  lastName: {
    type: DataTypes.STRING,
  },
  displayName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gender: {
    type: DataTypes.STRING,
  },
  dateOfBirth: {
    type: DataTypes.DATEONLY,
  },
  maritalStatus: {
    type: DataTypes.STRING,
  },
  bloodGroup:{
    type:DataTypes.STRING,
  },
  physicallyHandicapped: {
    type: DataTypes.BOOLEAN,
  },
  nationality: {
    type: DataTypes.STRING,
  },
  },
  {
    sequelize, // Pass the DataTypes instance
    modelName: 'UserPrimaryDetails',
    timestamps: false,
  }
);

// Create the table if it doesn't exist
UserPrimaryDetails.sync({ force: false });

module.exports = UserPrimaryDetails;

