const {Schema, model} = require('mongoose');

const applicantSchema = new Schema({
    email: {type: String, trim: true, lowercase: true,required: true},
    categories: {type: Array.of(String), lowercase: true, required: true},
    japaneseKnowledge: {type: Boolean},
    level: {type: String, trim: true, lowercase: true, required: true}
}, {
    timestamps: true
})

module.exports = model('applicant', applicantSchema);