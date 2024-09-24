#env sample
PORT=3000
MYSQL_STRING="mysql://root:@localhost/hello"

## API Documentation

### Send OTP

#### Endpoint

http://localhost:3003/api/v1/auth/otp/send

#### Description

This endpoint is used to send a One-Time Password (OTP) to a specified phone number for authentication purposes.

#### Request Body

```json
{
    "phoneNumber": 1234567890
}

```
#### Response Body

```json
{
    "berry": "6d893170075e055c4f104d85679a20fc4990d03cd39334211edafcc439f22bd3.U2FsdGVkX1/Town/Y+V2jn13Ev5K/8nJIhsPnfdZ6rE=",
    "OTP": "092241"
}

```

### Notes
- ### OTP wont be sent in response , just for dev purpose ###
- The hash field is provided for security purposes and may be used in conjunction with the OTP for validation.
- The generated OTP is a string of digits.

#### Endpoint

POST /api/v1/auth/otp/verify

This endpoint is used to verify a One-Time Password (OTP) sent to a specified phone number for authentication purposes.

#### Request Body

- **hash** (string, required): Hashed value associated with the OTP.
- **otp** (string, required): The One-Time Password to verify.
- **phoneNumber** (integer, required): The phone number associated with the OTP.
- **isValidReq** (integer, required): Indicates the type of request.
  - `1` if the user exists in the database and needs further verification.
  - `0` if it is a new person and only mobile number verification is required.

Example:
```json
{
    "hash": "ca10165ed4307873f01f6d6a84416cee391b7501b107dd1ecaf59e83b155f31f.U2FsdGVkX1/eaOzvBXQ/nHjZcZF1SALAtTYXyE8Q9RE=",
    "otp": "781648",
    "phoneNumber": 1234567890,
    "isValidReq": 1
}
```

#### Response Body

- **message** (string): Message indicating the status of the operation.
- **result** (object):
- **success** (boolean): Indicates whether the verification was successful.
- **accessToken** (string): Access token for further authentication.

```json
{
    "message": "Logged in successfully",
    "result": {
        "success": true,
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcwOTI5MTA1NCwiZXhwIjoxNzExODgzMDU0fQ.kePgLXGEe2l37E0qjBYKfXWu0VUh8S1I-E5gL-8M52o"
    }
}
```

##### Notes
- The isValidReq field determines the type of request and subsequent actions to be taken.
- The accessToken is provided upon successful verification for further authentication purposes.
- If the verification is successful, the success field will be true. Otherwise, it will be false.
