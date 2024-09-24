const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../../../services/database/connection');

class doc extends Model {}

doc.init(
  {
    userId: {
        type: DataTypes.STRING,
        unique:true,
        primaryKey:true,
        allowNull:false,
      },
      fileName:{
        type: DataTypes.STRING,
        allowNull:false,
      },
      path: {
        type: DataTypes.STRING,
        allowNull:false,
      },
  },
  {
    sequelize, // Pass the DataTypes instance
    modelName: 'doc',
    timestamps: false,
  }
);

// Create the table if it doesn't exist
doc.sync({ force: false });

module.exports = doc;

