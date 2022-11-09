const Joi = require('joi');
const {EMAIL} = require("../constants/regex.enum");
const {ApiError} = require("../errors");

const emailValidator = Joi.string().regex(EMAIL).lowercase().trim().error(new ApiError('The email did not pass the validation', 400));
const categoriesValidator = Joi.array().items(Joi.string().valid('nodejs', 'react', 'javascript', 'angular')).error(new ApiError('Category must be whether: "nodejs", "react", "angular", "javascript"', 400));
const japaneseKnowledgeValidator = Joi.boolean().error(new ApiError('JapaneseRequired must be boolean', 400));
const levelValidator = Joi.string().valid('junior', 'middle', 'senior').error(new ApiError('Level must be whether: "junior", "middle", "senior"', 400));

const applicantBodyValidator = Joi.object({
    email: emailValidator.required(),
    categories: categoriesValidator.required(),
    japaneseKnowledge: japaneseKnowledgeValidator.required(),
    level: levelValidator.required()
})

module.exports = {
    applicantBodyValidator
}
