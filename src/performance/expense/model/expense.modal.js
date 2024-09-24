const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../../../services/database/connection');

class expense extends Model {}

expense.init(
  {
    userId: {
        type: DataTypes.STRING,
      },
      date: {
        type: DataTypes.STRING,
      },
      expenseCategory: {
        type: DataTypes.STRING,
      },
      projectCenter: {
        type: DataTypes.STRING,
      },
      expenseTitle: {
        type: DataTypes.STRING,
      },
      currency: {
        type: DataTypes.STRING,
      },
      Amount: {
        type: DataTypes.INTEGER,
      },
      billNumber: {
        type: DataTypes.STRING,
      },
      merchantName: {
        type: DataTypes.STRING,
      },
      comment: {
        type: DataTypes.TEXT,
      },
  },
  {
    sequelize, // Pass the DataTypes instance
    modelName: 'expense',
    timestamps: false,
  }
);

// Create the table if it doesn't exist
expense.sync({ force: false });

module.exports = expense;

