module.exports = app => {
    const roleController = require("../controllers/role.controller");

    const Router = require("express").Router();

    Router.post('/roles', roleController.createRole);

    app.use('/', Router);
}