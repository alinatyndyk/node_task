const {Router} = require('express');

const {positionController} = require("../controllers");
const {positionMldwr, commonMldwr} = require("../middlewares");


const positionRouter = Router();

positionRouter.get('/',
    positionMldwr.searchPositionsWithQuery,
    positionController.getPositions
)

positionRouter.get('/:position_id',
    commonMldwr.validIdMiddleware('_id'),
    positionController.getPositionById
)

positionRouter.post('/',
    positionMldwr.isPositionBodyValid('positionBodyValidator'),
    positionController.createPosition
)

positionRouter.patch('/:position_id',
    commonMldwr.validIdMiddleware('_id'),
    positionMldwr.isPositionBodyValid('positionToPatch'),
    positionController.updatePositionById
)

positionRouter.delete('/:position_id',
    commonMldwr.validIdMiddleware('_id'),
    positionController.deletePositionById
)

positionRouter.get('/search/:key',
    positionController.searchPositionByDescription
)

module.exports =
    positionRouter
