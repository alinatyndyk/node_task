const Joi = require('joi');
const {ApiError} = require("../errors");


const categoryValidator = Joi.string().valid('nodejs', 'react', 'javascript', 'angular').error(new ApiError('Category must be whether: "nodejs", "react", "angular", "javascript"', 400));
const levelValidator = Joi.string().valid('junior', 'middle', 'senior').error(new ApiError('Level must be whether: "junior", "middle", "senior"', 400));
const companyValidator = Joi.string().min(2).max(30).error(new ApiError('Company name has to be more than 2 symbols and less than 30', 400));
const descriptionValidator = Joi.string().max(300).error(new ApiError('Description must be string and less than 300 symbols', 400));
const japaneseRequiredValidator = Joi.boolean().error(new ApiError('JapaneseRequired must be boolean. True or false', 400));

const positionBodyValidator = Joi.object({
    category: categoryValidator.required(),
    level: levelValidator.required(),
    company: companyValidator.required(),
    description: descriptionValidator,
    japaneseRequired: japaneseRequiredValidator.required(),
})

const positionToPatch = Joi.object({
    japaneseRequired: japaneseRequiredValidator,
    description: descriptionValidator
})

module.exports = {
    positionBodyValidator,
    positionToPatch
}
