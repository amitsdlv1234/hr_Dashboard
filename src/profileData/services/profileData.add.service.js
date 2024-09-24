const User = require('../../userAuth/modal/auth.modal');
// const Organization = require('../../organization/model/organization.modal');
const EmployeeJobDetail = require('../../jobDetails/model/jobDetails.modal');
const UserPrimaryDetail = require('../../userPrimaryDetails/model/userPrimary.modal');
const UserContactDetails = require('../../userContactDetails/model/userContact.modal');
const UserPermanentAddressDetails = require('../../userPermanentAddress/model/userPermanentAddress.modal');
const UserCurrentAddressDetails = require('../../userCurrentAddressDetails/model/userCurrentAddress.modal');
const UserRelationDetails = require('../../relations/model/userRelation.modal');
const UserEducationDetails = require('../../userEducationDetails/model/userEducation.modal');
const UserIdentityInfoDetails = require('../../userIdentityInfo/model/userIdentityInfo.modal');
const employeeTime = require('../../employeeTimeDetails/model/employeeTime.modal');
const employeejobDetail = require('../../jobDetails/model/jobDetails.modal');
const Organization = require('../../organization/model/organization.modal');
const assignAssets = require('../../assignAssets/model/assignAssets.modal');

class AddService {
  
    async  getPrimaryDetail(userId){
        try {
            console.log(userId);
            const newUser = await User.findOne({ where: { emailId: userId } });
            if (!newUser) {
                return "User not present";
            } else {
                const primaryDetails = await UserPrimaryDetail.findOne({
                    where: { userId: userId },
                });
                const contactDetails = await UserContactDetails.findAll({
                    where: { userId: userId },
                });
                const jobDetails = await EmployeeJobDetail.findAll({
                    where: { userId: userId },
                });
                const currentAddressDetails = await UserCurrentAddressDetails.findOne({
                    where: { userId: userId },
                });
                const permanentAddressDetails = await UserPermanentAddressDetails.findAll({
                    where: { userId: userId },
                });
                const relationDetails = await UserRelationDetails.findAll({
                    where: { userId: userId },
                });
                const EmployeeTime = await employeeTime.findAll({
                    where: { userId: userId },
                });
                const EmployeejobDetail = await employeejobDetail.findAll({
                    where: { userId: userId },
                });
                const organization = await Organization.findAll({
                    where: { userId: userId },
                });
                const educationDetails = await UserEducationDetails.findAll({
                    where: { userId: userId },
                });
                const AssignAssets = await assignAssets.findAll({
                    where: { userId: userId },
                });
                const identityInfoDetails = await UserIdentityInfoDetails.findAll({
                    where: { userId: userId },
                });
                const data = {
                    primaryDetails:primaryDetails,
                    contactDetails:contactDetails,
                    jobDetails:jobDetails,
                    currentAddressDetails:currentAddressDetails,
                    permanentAddressDetails:permanentAddressDetails,
                    relationDetails:relationDetails,
                    EmployeeTime:EmployeeTime,
                    EmployeejobDetail:EmployeejobDetail,
                    organization:organization,
                    educationDetails:educationDetails,
                    AssignAssets:AssignAssets,
                    identityInfoDetails:identityInfoDetails
                };
                return data;
            }
        } catch (error) {
            console.log(error);
            return error; 
        }
    }
}

module.exports = AddService;
