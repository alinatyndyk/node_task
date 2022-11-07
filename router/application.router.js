const {Router} = require('express');
const {applicationController} = require("../controllers");
const {applicationMldwr, commonMldwr} = require("../middlewares");


const applicationRouter = Router();

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
    applicationMldwr.isApplicationBodyValid('applicantBodyValidator'),
    applicationController.updateApplicationById
)

applicationRouter.delete('/:application_id',
    applicationController.deleteApplicationById
)

//todo common mldwr id check

module.exports =
    applicationRouter
