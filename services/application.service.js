const {Applicant} = require('../dataBase')

module.exports = {

    getApplications() {
        return Applicant.find();
    },

    getApplicationById(filter = {}) {
        return Applicant.findById(filter);
    },

    getApplicationByParams(filter = {}) {
        return Applicant.findOne(filter);
    },

    getApplicationsByParams(filter = {}) {
        return Applicant.find(filter);
    },

    createApplication(applicationObject) {
        return Applicant.create(applicationObject);
    },

    updateApplicationById(application_Id, newApplicationObject) {
        return Applicant.findOneAndUpdate({_id: application_Id}, newApplicationObject, {new: true});
    },

    deleteApplicationById(application_id) {
        return Applicant.findByIdAndDelete({_id: application_id});
    }

}