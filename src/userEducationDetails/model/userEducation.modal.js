const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../../services/database/connection');

class UserEducationDetails extends Model {}

UserEducationDetails.init(
  {
    userId: {
        type: DataTypes.STRING,
        unique:true,
        primaryKey:true,
        allowNull:false,
      },
      tenthSchoolName: {
        type: DataTypes.STRING,
    },
    tenthPercentage: {
        type: DataTypes.FLOAT,
    },
    tenthPassingYear: {
        type: DataTypes.INTEGER,
    },
    twelfthSchoolName: {
        type: DataTypes.STRING,
    },
    twelfthPercentage: {
        type: DataTypes.FLOAT,
    },
    twelfthPassingYear: {
        type: DataTypes.INTEGER,
    },
    graduationCollegeName: {
        type: DataTypes.STRING,
    },
    graduationDegree: {
        type: DataTypes.STRING,
    },
    graduationPercentage: {
        type: DataTypes.FLOAT,
    },
    graduationPassingYear: {
        type: DataTypes.INTEGER,
    },
    experience:{
        type:DataTypes.INTEGER
    }
  },
  {
    sequelize, // Pass the DataTypes instance
    modelName: 'UserEducationDetails',
    timestamps: false,
  }
);

// Create the table if it doesn't exist
UserEducationDetails.sync({ force: false });

module.exports = UserEducationDetails;

