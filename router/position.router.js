const {Router} = require('express');
const {positionController} = require("../controllers");
const {positionMldwr} = require("../middlewares");


const positionRouter = Router();

positionRouter.get('/',
    positionMldwr.searchPositionsWithQuery,
    positionController.getPositions
)

positionRouter.get('/:position_id',
    positionController.getPositionById
)

positionRouter.post('/',
    positionController.createPosition
)

positionRouter.patch('/:position_id',
    positionController.updatePositionById
)

positionRouter.delete('/:position_id',
    positionController.deletePositionById
)

module.exports =
    positionRouter
