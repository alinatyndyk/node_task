const nodemailer = require('nodemailer');
const EmailTemplates = require('email-templates');
const path = require("path");

const {NO_REPLY_EMAIL, NO_REPLY_PASSWORD} = require("../configs/configs");
const EmailTemplatesObj = require('../email-templates');
const {ApiError} = require("../errors");

const sendEmail = async (userMail, emailTemplate, locals = {}) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: NO_REPLY_EMAIL,
            pass: NO_REPLY_PASSWORD
        }
    });

    const templateParser = new EmailTemplates({
        views: {
            root: path.join(process.cwd(), 'email-templates')
        }
    });

    const emailInfo = EmailTemplatesObj[emailTemplate];

    const html = await templateParser.render(emailInfo.templateName, locals)

    if (!emailInfo) {
        throw new ApiError('Wrong template name', 500)
    }

    return transporter.sendMail({
        from: 'Find a job platform',
        to: userMail,
        subject: emailInfo.subject,
        html
    })
}

module.exports = {
    sendEmail
}