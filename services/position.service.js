const Position = require('../dataBase/Position')

module.exports = {
    getPositions() {
        return Position.find();
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
        return Position.findByIdAndDelete({_id: position_id});
    },

    searchPositionByDescription(key) {
        return Position.find({
            "$or": [
                {description: {$regex: key}}
            ]
        });
    }
}