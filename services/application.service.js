const {Applicant} = require('../dataBase')

module.exports = {

    getApplicationById(filter = {}) {
        return Applicant.findById(filter);
    },

    createApplication(applicationObject) {
        return Applicant.create(applicationObject);
    },

    updateApplicationById(application_Id, newApplicationObject) {
        return Applicant.updateOne({_id: application_Id}, newApplicationObject, {new: true});
    },

    deleteApplicationById(application_id) {
        return Applicant.deleteOne({_id: application_id});
    },

    getApplicationByParams(filter = {}) {
        return Applicant.findOne(filter);
    }
}