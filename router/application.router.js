const {Router} = require('express');
const {applicationController} = require("../controllers");
const {applicationMldwr, commonMldwr} = require("../middlewares");


const applicationRouter = Router();

applicationRouter.get('/',
    applicationController.getApplications
)

applicationRouter.get('/:application_id',
    commonMldwr.validIdMiddleware('_id'),
    applicationController.getApplicationById
)

applicationRouter.post('/',
    applicationMldwr.isApplicationBodyValid('applicantBodyValidator'),
    applicationMldwr.isEmailUnique,
    applicationController.createApplication
)

applicationRouter.put('/:application_id',
    commonMldwr.validIdMiddleware('_id'),
    applicationMldwr.isApplicationBodyValid('applicantToSetValidator'),
    applicationController.updateApplicationById
)

applicationRouter.delete('/:application_id',
    commonMldwr.validIdMiddleware('_id'),
    applicationController.deleteApplicationById
)

module.exports =
    applicationRouter
