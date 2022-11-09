const {applicationService} = require("../services");

module.exports = {

    getApplications: async (req, res, next) => {
        try {
            const applications = await applicationService.getApplications();
            res.json(applications);

            next();
        } catch (e) {
            next(e);
        }
    },

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

            res.sendStatus(201);
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

            res.sendStatus(204);
            res.json(deletedApplication);

            next();
        } catch (e) {
            next(e);
        }
    }
}