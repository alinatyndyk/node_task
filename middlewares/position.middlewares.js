const {positionService} = require("../services");
const {ApiError} = require("../errors");
module.exports = {

    searchPositionsWithQuery: async (req, res, next) => {
        try {
            const positions = await positionService.filterPositionsWithQuery(req.query);

            if (!positions) {
                return next(new ApiError('Positions are not found', 400));
            }

            res.json(positions);
            next();
        } catch (e) {
            next(e)
        }
    }
}