const {positionService, applicationService} = require("../services");
const {sendEmail} = require("../services/mailer.service");
const {DELETED_POSITION, ADDED_POSITION} = require("../constants/email.action.enum");
const {ApiError} = require("../errors");
const {NEW_POSITION_URL} = require("../configs/configs");

module.exports = {

    getPositions: async (req, res, next) => {
        try {
            const positions = await positionService.getPositions();
            //todo check the error

            res.json(positions);
            next();
        } catch (e) {
            next(new ApiError('Route not found', 400));
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
            const {_id} = PositionToAdd;

            const applications = await applicationService.getApplicationsByParams({
                level: req.body.level,
                categories: req.body.category,
                japaneseKnowledge: req.body.japaneseRequired
            });

            const newPositionUrl = `${NEW_POSITION_URL}${_id}`;
            console.log(newPositionUrl);

            await applications.map(app => {
                sendEmail(app.email, ADDED_POSITION, {newPositionUrl});
            });

            res.sendStatus(201);
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

            const applications = await applicationService.getApplicationsByParams({
                level: deletedPosition.level,
                categories: deletedPosition.category,
                japaneseKnowledge: deletedPosition.japaneseRequired,
            });


            await applications.map(app => {
                sendEmail(app.email, DELETED_POSITION);
            });

            res.sendStatus(204);
            res.json(deletedPosition);

            next();
        } catch (e) {
            next(e);
        }
    },

    searchPositionByDescription: async (req, res, next) => {
        try {
            const data = await positionService.searchPositionByDescription(req.params.key);
            res.json(data);
        } catch (e) {
            next(e);
        }
    }

}