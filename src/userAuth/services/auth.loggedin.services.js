const HashService = require('../../../services/hash/hash');
const UserRepository = require('../modal/auth.modal.repository');
const jwt = require('jsonwebtoken');

class AuthServiceLoggedIn {
    async verifyLogin(hash, otp, phoneNumber, isValidReq) {
        try {
            const hashService = new HashService();
            const tokens = hash.split('.');
            const decryptTime = this.decryptTime(tokens[1]);


            if (decryptTime <= Date.now() + (3 * 60 * 1000)) {
                const hashResult = await this.hashData(phoneNumber, otp);
                if (hashResult === tokens[0]) {
                    if (isValidReq === 1) {
                        return await this.validateUser(phoneNumber); // Pass otp and tokens as arguments
                    }
                    return { success: true };
                }

            }

            return { success: false };
        } catch (err) {
            console.error('Error:', err);
            throw new Error('Internal server error. Please try again later.');
        }
    }

    async validateUser(phoneNumber) { // Receive otp and tokens as arguments
        const userRepository = new UserRepository();
        const user = await userRepository.checkUserExists(phoneNumber);
        if (user) {
            const accessToken = jwt.sign({ userId: user.id, phoneNumber: user.phoneNumber }, process.env.JWT_ACCESS_TOKEN, { expiresIn: '30d' });
            return { success: true, accessToken: accessToken };
        } else {
            console.log("Unauthorized User");
            return { success: false };
        }
    }

    decryptTime(timeToken) {
        const hashService = new HashService();
        return hashService.way2decryptData(timeToken, process.env.ENCRYPTION_KEY);
    }

    async hashData(phoneNumber, otp) {
        const hashService = new HashService();
        return hashService.hashData(JSON.stringify({ phoneNumber, otp }));
    }
}

module.exports = AuthServiceLoggedIn;
