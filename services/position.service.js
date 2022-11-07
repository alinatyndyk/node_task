const Position = require('../dataBase/Position')

module.exports = {
    getPositions(filter = {}) {
        return Position.find(filter);
    },

    getPositionById(filter = {}) {
        return Position.findById(filter);
    },

    filterPositionsWithQuery(filter = {}) {
        return Position.find(filter);
    },

    createPosition(positionObject) {
        return Position.create(positionObject);
    },

    updatePositionById(position_Id, newPositionObject) {
        return Position.updateOne({_id: position_Id}, newPositionObject, {new: true});
    },

    deletePositionById(position_id) {
        return Position.deleteOne({_id: position_id});
    }
}