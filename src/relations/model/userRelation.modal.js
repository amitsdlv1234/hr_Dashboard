const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../../services/database/connection');

class UserRelationDetails extends Model {}

UserRelationDetails.init(
  {
    userId: {
        type: DataTypes.STRING,
        unique:true,
        primaryKey:true,
        allowNull:false,
      },
      relation: {
        type: DataTypes.STRING,
        allowNull: false
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: true
        }
      },
      mobile: {
        type: DataTypes.STRING,
      },
      passion: {
        type: DataTypes.STRING,
      },
      dateOfBirth: {
        type: DataTypes.DATEONLY,
      }
  },
  {
    sequelize, // Pass the DataTypes instance
    modelName: 'UserRelationDetails',
    timestamps: false,
  }
);

// Create the table if it doesn't exist
UserRelationDetails.sync({ force: false });

module.exports = UserRelationDetails;

