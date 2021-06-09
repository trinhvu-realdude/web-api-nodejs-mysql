module.exports = app => {
    const roles = require("../controllers/role.controller");

    const router = require("express").Router();

    router.post('/roles', roles.create);

    router.get('/roles', roles.findAll);

    router.get('/roles/users', roles.findAllUserRole);

    app.use('/api', router);
}
