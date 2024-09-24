// Import the Express library
const express = require('express')
const dotenv = require('dotenv')
const winston = require('winston');
const morgan = require("morgan")
const cors = require('cors');
const bodyParser =require("body-parser");

const { errors, isCelebrateError } = require("celebrate");

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.simple(),
  filename: 'app.log',
  // other options...
});



// Create a new Express application
const app = express()

app.use(cors());
app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.json())
app.use(morgan(':status :method :url :response-time :req[body]'))

dotenv.config()

const authRoutes = require('./src/userAuth/auth.route');
const userPrimaryDetails=require('./src/userPrimaryDetails/userPrimary.route');
const UserAddressProofDetails = require('./src/userAddressProof/userAddressProof.route');
const UserEducationDetails = require('./src/userEducationDetails/userEducation.route');
const UserIdentityInfoDetails = require('./src/userIdentityInfo/userIdentityInfo.route');
const doc = require('./src/documents/degreeCertificates/doc.route');
const offerLetters = require('./src/documents/offerLetters/doc.route');
const employeeLetters = require('./src/documents/employeeLetters/doc.route');
const Identity = require('./src/documents/identity/doc.route');
const prevExp = require('./src/documents/previousExperience/doc.route');
const Signature = require('./src/documents/signature/doc.route');
const employeeTime = require('./src/employeeTimeDetails/employeeTime.route');
const employeejobDetail = require('./src/jobDetails/jobDetails.route');
const Organization = require('./src/organization/organization.route');
const assignAssets = require('./src/assignAssets/assignAssets.route');
const assetsReplacementReq = require('./src/assetsReplacementReq/assetsReplacementReq.route');
const newAssetsReq = require('./src/newAssetsReq/newAssetsReq.route');
const employeeLeaveReq = require('./src/employeeLeave/employeeLeaveReq.route');
const UserCurrentAddressDetails = require('./src/userCurrentAddressDetails/userCurrentAddress.route');
const UserPermanentAddressDetails = require('./src/userPermanentAddress/userPermanentAddress.route');
const UserContactDetails = require('./src/userContactDetails/userContact.route');
const header = require('./src/headerData/header.route');
const employeeResign = require('./src/employeeResign/emlpoyeeResign.route');
const userRelation = require('./src/relations/userRelation.route');
const profileDetails = require('./src/profileData/profile.route');
const employeeAttendance = require('./src/employeeAttendance/employeeAttendance.route');
const otheremployeeAttendance = require('./src/otherAttendanceDetails/employeeAttendance.route');
const employeeAttendanceReq = require('./src/attendanceReq/employeeAttendance.route');
const employeePartialDayAttendance = require('./src/partialDayAttendence/employeeAttendance.route');
const myObjective = require('./src/performance/objective/objective.route');
const companyObjective = require('./src/performance/companyObjective/objective.route');
const feedbackReq = require('./src/performance/feedbackReq/feedbackReq.route');
const expense = require('./src/performance/expense/expense.route');
const departmentObjective = require('./src/performance/departmentObjective/objective.route');
const scheduledMeetingRepository = require('./src/performance/meetings/scheduledMeeting/scheduledMeeting.route');
// Define your routes

app.get('/', (req, res) => {
  res.send('api running new deploy');
  
});app.get("/api/v1/lms/health" , (req,res)=>{res.status(200).json({"message":"Server running. Health is good."})})
app.use('/api/v1',authRoutes)
app.use('/api/v1',userPrimaryDetails);
app.use('/api/v1',UserAddressProofDetails);
app.use('/api/v1',UserCurrentAddressDetails);
app.use('/api/v1',UserPermanentAddressDetails);
app.use('/api/v1',UserEducationDetails);
app.use('/api/v1',UserAddressProofDetails);
app.use('/api/v1',UserIdentityInfoDetails);
app.use('/api/v1',doc);
app.use('/api/v1',offerLetters);
app.use('/api/v1',employeeLetters);
app.use('/api/v1',Identity);
app.use('/api/v1',prevExp);
app.use('/api/v1',Signature);
app.use('/api/v1',employeeTime);
app.use('/api/v1',employeejobDetail);
app.use('/api/v1',Organization);
app.use('/api/v1',assignAssets);
app.use('/api/v1',assetsReplacementReq);
app.use('/api/v1',newAssetsReq);
app.use('/api/v1',UserContactDetails);
app.use('/api/v1',employeeLeaveReq);
app.use('/api/v1',header);
app.use('/api/v1',employeeResign);
app.use('/api/v1',userRelation);
app.use('/api/v1',profileDetails);
app.use('/api/v1',employeeAttendance);
app.use('/api/v1',otheremployeeAttendance);
app.use('/api/v1',employeeAttendanceReq);
app.use('/api/v1',employeePartialDayAttendance);
app.use('/api/v1',myObjective);
app.use('/api/v1',feedbackReq);
app.use('/api/v1',expense);
app.use('/api/v1',companyObjective);
app.use('/api/v1',departmentObjective);
app.use('/api/v1',scheduledMeetingRepository)
const celebrateErrorHandler = (err, req, res, next) => {
  if (isCelebrateError(err)) {
    const errors = err.details.entries();
    const errorMessage = Array.from(errors).map(([segment, details]) => {
      return `${segment}: ${details.message}`;
    }).join('; ');

    res.status(400).json({ message: errorMessage });
  } else {
    next(err);
  }
};

app.use(celebrateErrorHandler);

// Start the server and listen for incoming requests on the specified port
const PORT=process.env.PORT_SERVER;
app.listen(PORT, () => {  
  console.log(`Server is listening at http://localhost:${PORT}`)
})

// Export the app so it can be used in other files
module.exports = app
