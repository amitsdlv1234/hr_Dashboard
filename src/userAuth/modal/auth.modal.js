const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../../services/database/connection');

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dob: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    emailId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber:{
      type:DataTypes.BIGINT,
      allowNull:false,
      unique:true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isVerifiedMobile:{
      type:DataTypes.BOOLEAN,
      allowNull:true,
    },
    role:{
      type:DataTypes.STRING,
      allowNull:true
    },
    isVerifiedEmail:{
      type:DataTypes.BOOLEAN,
      default:false,
    }
  },
  {
    sequelize, // Pass the sequelize instance
    modelName: 'User',
    timestamps: false,
  }
);

// Create the table if it doesn't exist
User.sync({ force: false });

module.exports = User;

