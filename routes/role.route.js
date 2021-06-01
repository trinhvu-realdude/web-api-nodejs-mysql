module.exports = app => {
    const roles = require("../controllers/role.controller");

    const router = require("express").Router();

    router.post('/', roles.create);

    router.get('/', roles.findAll);

    router.get('/user-role', roles.findAllUserRole);

    app.use('/api/roles', router);
}