const {positionService} = require("../services");

module.exports = {

    getPositions: async (req, res, next) => {
        try {
            const positions = await positionService.getPositions();
            res.json(positions);

            next();
        } catch (e) {
            next(e);
        }
    },

    getPositionById: async (req, res, next) => {
        try {
            const {position_id} = req.params;
            const position = await positionService.getPositionById(position_id);
            res.json(position)

            next();
        } catch (e) {
            next(e);
        }
    },

    createPosition: async (req, res, next) => {
        try {
            const PositionToAdd = await positionService.createPosition(req.body);
            res.json(PositionToAdd);

            next();
        } catch (e) {
            next(e);
        }
    },

    updatePositionById: async (req, res, next) => {
        try {
            const {position_id} = req.params;
            const PositionToPatch = await positionService.updatePositionById(position_id, req.body);
            res.json(PositionToPatch);

            next();
        } catch (e) {
            next(e);
        }
    },

    deletePositionById: async (req, res, next) => {
        try {
            const {position_id} = req.params;
            const deletedPosition = await positionService.deletePositionById(position_id);
            res.join(deletedPosition);

            next();
        } catch (e) {
            next(e);
        }
    }
}