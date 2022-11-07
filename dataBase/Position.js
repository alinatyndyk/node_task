const {Schema, model} = require('mongoose');

const positionSchema = new Schema({
    category: {type: String, trim: true, lowercase: true, required: true},
    level: {type: String, trim: true, lowercase: true, required: true},
    company: {type: String, trim: true, required: true},
    description: {type: String, default: 'No description'},
    japaneseRequired: {type: Boolean}
}, {
    timestamps: true
})

module.exports = model('position', positionSchema);