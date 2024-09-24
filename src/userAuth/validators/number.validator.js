const { celebrate, Joi } = require('celebrate')

exports.phoneNumber = celebrate({
    body: Joi.object({
        phoneNumber: joi.string().length(10).pattern(/^[0-9]+$/).required(),

    })
})
