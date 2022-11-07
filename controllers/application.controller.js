const {applicationService} = require("../services");

module.exports = {

    getApplicationById: async (req, res, next) => {
        try {
            const {application_id} = req.params;
            const application = await applicationService.getApplicationById(application_id);
            res.json(application)

            next();
        } catch (e) {
            next(e);
        }
    },

    createApplication: async (req, res, next) => {
        try {
            const ApplicationToAdd = await applicationService.createApplication(req.body);
            res.json(ApplicationToAdd);

            next();
        } catch (e) {
            next(e);
        }
    },

    updateApplicationById: async (req, res, next) => {
        try {
            const {application_id} = req.params;
            const ApplicationToPatch = await applicationService.updateApplicationById(application_id, req.body);
            res.json(ApplicationToPatch);

            next();
        } catch (e) {
            next(e);
        }
    },

    deleteApplicationById: async (req, res, next) => {
        try {
            const {application_id} = req.params;
            const deletedApplication = await applicationService.deleteApplicationById(application_id);
            res.json(deletedApplication);

            next();
        } catch (e) {
            next(e);
        }
    }
}