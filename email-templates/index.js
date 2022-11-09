const {WELCOME, DELETED_POSITION, ADDED_POSITION} = require("../constants/email.action.enum");

module.exports = {
    [WELCOME]: {
        subject: 'Welcome on board',
        templateName: 'welcome'
    },

    [DELETED_POSITION]: {
        subject: 'A position that suited your requirements was removed',
        templateName: 'deleted_position'
    },

    [ADDED_POSITION]: {
        subject: 'A position that suites your requirements was added',
        templateName: 'added_position'
    },
}