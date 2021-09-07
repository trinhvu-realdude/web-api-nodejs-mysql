module.exports = app => {
    const roleController = require("../controllers/role.controller");

    const router = require("express").Router();

    router.post('/roles', roleController.createRole);

    app.use('/', router);
}