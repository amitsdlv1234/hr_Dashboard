const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../../services/database/connection');

class Organization extends Model {}

Organization.init(
  {
    userId: {
        type: DataTypes.STRING,
        unique:true,
        primaryKey:true,
        allowNull:false,
      },
      businessUnit: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      department: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      technology: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      costCenter: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      legalEntity: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dottedLineManager: {
        type: DataTypes.STRING,
        defaultValue: '-Not Set-',
      },
      reportsTo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      managerOfManager: {
        type: DataTypes.STRING,
        defaultValue: '-Not Set-',
      },
      directReports: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
  },
  {
    sequelize, // Pass the DataTypes instance
    modelName: 'Organization',
    timestamps: false,
  }
);

// Create the table if it doesn't exist
Organization.sync({ force: false });

module.exports = Organization;

