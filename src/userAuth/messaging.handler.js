// messaging.js

class MessagingService {
    constructor() {
        // Initialize your messaging service here
    }

    async sendOTP(phoneNumber, otp) {
        try {
            // Regular expression to extract country code and phone number
            const phoneRegex = /^\+(?<countryCode>\d{1,3})(?<phoneNumber>\d{10})$/;
            const match = phoneNumber.match(phoneRegex);
            
            if (!match) {
                throw new Error('Invalid phone number format. Please provide a number in the format: "+[countryCode][phoneNumber]".');
            }

            const countryCode = match.groups.countryCode;
            const phoneNumberDigits = match.groups.phoneNumber;

            // Code to send OTP via SMS using SMS service
            // This is just a placeholder, replace it with actual code to send SMS
            console.log(`Sending OTP ${otp} to ${phoneNumberDigits} (Country Code: ${countryCode}) via SMS`);
            // Example: SMSProvider.sendSMS(phoneNumber, `Your OTP is: ${otp}`);
        } catch (error) {
            console.error('Error sending OTP via SMS:', error);
            throw new Error('Failed to send OTP via SMS');
        }
    }
}

module.exports = MessagingService;
