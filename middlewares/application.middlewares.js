const {ApiError} = require("../errors");
const {applicationService} = require("../services");
const {applicationValidators} = require("../validators");

module.exports = {
    isEmailUnique: async (req, res, next) => {
        try {
            const {email} = req.body;
            const result = await applicationService.getApplicationByParams({email});
            if (result) {
                next(new ApiError('Account with this email already exists'), 400)
            }
            next();
        } catch (e) {
            next(e)
        }
    },

    isApplicationBodyValid: (validatorType) => async (req, res, next) => {
        try {
            console.log(req.query);
            const validate = applicationValidators[validatorType].validate(req.body);
            if (validate.error) {
                return next(new ApiError(validate.error.details[0].message, 400))
            }

            next();
        } catch (e) {
            next(e);
        }
    }
}