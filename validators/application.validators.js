const Joi = require('joi');
const {EMAIL} = require("../constants/regex.enum");
const {ApiError} = require("../errors");

const emailValidator = Joi.string().regex(EMAIL).lowercase().trim();
const categoriesValidator = Joi.array().items(Joi.string().valid('nodejs', 'react', 'javascript', 'angular'));
const japaneseKnowledgeValidator = Joi.boolean();
const levelValidator = Joi.string().valid('junior', 'middle', 'senior');

const applicantBodyValidator = Joi.object({
    email: emailValidator.required(),
    categories: categoriesValidator.required(),
    japaneseKnowledge: japaneseKnowledgeValidator.required(),
    level: levelValidator.required()
})

module.exports = {
    applicantBodyValidator
}
