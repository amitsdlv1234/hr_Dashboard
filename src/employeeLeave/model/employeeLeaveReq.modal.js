const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../../services/database/connection');

class employeeLeaveReq extends Model {}

employeeLeaveReq.init(
  {
    userId: {
        type: DataTypes.STRING,
        allowNull:false,
      },
      fromDate:{
        type:DataTypes.DATE,
        allowNull:false
      },
      toDate:{
        type:DataTypes.DATE,
        allowNull:false
      },
      leaveType:{
          type:DataTypes.STRING,
          allowNull:false
      },
      status:{
        type:DataTypes.STRING,
        defaultValue:"Pending",
        allowNull:false
    },
      employeeName:{
        type:DataTypes.STRING,
        allowNull:false
      },
      requestedBy:{
        type:DataTypes.STRING,
    },
    actionComment:{
      type:DataTypes.TEXT,
      defaultValue:"comment"
  },
     actionTakenOn:{
    type:DataTypes.DATE,
    allowNull:true
},
      note:{
        type:DataTypes.TEXT,
        defaultValue:"note"
      }
  },
  {
    sequelize, // Pass the DataTypes instance
    modelName: 'employeeLeaveReq',
    timestamps: false,
  }
);

// Create the table if it doesn't exist
employeeLeaveReq.sync({ force: false });

module.exports = employeeLeaveReq;

