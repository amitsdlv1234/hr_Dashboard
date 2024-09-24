const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../../services/database/connection');

class employeejobDetail extends Model {}

employeejobDetail.init(
  {
    userId: {
        type: DataTypes.STRING,
        unique:true,
        primaryKey:true,
        allowNull:false,
      },
      employeeNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      dateOfJoining: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      jobTitlePrimary: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      jobTitleSecondary: {
        type: DataTypes.STRING,
      },
      inProbation: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true, // Assuming Yes means true
      },
      noticePeriod: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      workerType: {
        type: DataTypes.ENUM('Permanent', 'Contract', 'Temporary'),
        allowNull: false,
      },
      timeType: {
        type: DataTypes.ENUM('Full Time', 'Part Time'),
        allowNull: false,
      },
      contractStatus: {
        type: DataTypes.ENUM('Not Applicable', 'Active', 'Expired'),
        allowNull: false,
      },
      payGrade: {
        type: DataTypes.STRING,
      },
      payBand: {
        type: DataTypes.STRING,
      },
      experiencePolicy: {
        type: DataTypes.STRING,
      },
      loanPolicy: {
        type: DataTypes.STRING,
      },
  },
  {
    sequelize, // Pass the DataTypes instance
    modelName: 'employeejobDetail',
    timestamps: false,
  }
);

// Create the table if it doesn't exist
employeejobDetail.sync({ force: false });

module.exports = employeejobDetail;

