const User = require('../../userAuth/modal/auth.modal');
const Organization = require('../../organization/model/organization.modal');
const EmployeeJobDetail = require('../../jobDetails/model/jobDetails.modal');
const UserPrimaryDetail = require('../../userPrimaryDetails/model/userPrimary.modal');

class AddService {
  
    async  getPrimaryDetail(userId){
        try {
            console.log(userId);
            const newUser = await User.findOne({ where: { emailId: userId } });
            if (!newUser) {
                return "User not present";
            } else {
                const user = await UserPrimaryDetail.findOne({
                    where: { userId: userId },
                    attributes: ['firstName','middleName','lastName','bloodGroup','displayName']
                });
                const org = await Organization.findAll({
                    where: { userId: userId },
                    attributes: ['department', 'location', 'costCenter', 'reportsTo', 'businessUnit']
                });
                const jobData = await EmployeeJobDetail.findAll({
                    where: { userId: userId },
                    attributes: ['employeeNumber', 'jobTitlePrimary']
                });
                const data = {
                    emailId:newUser.emailId,
                    display:user.displayName,
                    firstName:user.firstName,
                    middleName:user.middleName,
                    lastName:user.lastName,
                    phoneNumber:newUser.phoneNumber,
                    bloodGroup: user.bloodGroup,
                    organizationDetails: org,
                    jobDetails: jobData,
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
