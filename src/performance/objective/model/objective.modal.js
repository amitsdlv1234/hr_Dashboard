const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../../../services/database/connection');

class myObjective extends Model {}

myObjective.init(
  {
    userId: {
        type: DataTypes.STRING,
      },
      date: {
        type: DataTypes.STRING,
      },
      stutas: {
        type: DataTypes.STRING,
      },
      tags: {
        type: DataTypes.TIME,
      },
      template: {
        type: DataTypes.STRING,
      },
      companyTemplate: {
        type: DataTypes.STRING,
      },
      templateObjective: {
        type: DataTypes.TEXT,
      },
      keyResult: {
        type: DataTypes.STRING,
      },
  },
  {
    sequelize, // Pass the DataTypes instance
    modelName: 'myObjective',
    timestamps: false,
  }
);

// Create the table if it doesn't exist
myObjective.sync({ force: false });

module.exports = myObjective;

