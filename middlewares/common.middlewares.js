const {isObjectIdOrHexString} = require("mongoose");

const {ApiError} = require("../errors");

module.exports = {
    validIdMiddleware:
        (fieldName, from = 'params') => async (req, res, next) => {
            try {
                console.log(req[from][fieldName]);
                if (isObjectIdOrHexString(req[from][fieldName])) {
                    return next(new ApiError('The provided id is not valid', 400));
                }

                next();
            } catch (e) {
                next(e)
            }
        },
}

