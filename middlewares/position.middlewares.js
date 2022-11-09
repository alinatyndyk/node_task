const {positionService} = require("../services");
const {ApiError} = require("../errors");
const {positionValidators} = require("../validators");
module.exports = {

    searchPositionsWithQuery: async (req, res, next) => {
        try {
            const positions = await positionService.filterPositionsWithQuery(req.query);

            if (!positions) {
                return next(new ApiError('Positions were not found. Try later', 400));
            }

            res.json(positions);
            next();
        } catch (e) {
            next(e)
        }
    },

    isPositionBodyValid: (validatorType) => async (req, res, next) => {
        try {
            const validate = positionValidators[validatorType].validate(req.body);
            if (validate.error) {
                return next(new ApiError(validate.error.message, 400))
            }

            next();
        } catch (e) {
            next(e);
        }
    }
}