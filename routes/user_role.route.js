module.exports = app => {
    const user_roles = require("../controllers/user_role.controller");

    const router = require("express").Router();

    router.post('/user-role', user_roles.create);

    router.get('/user-role', user_roles.findAll);

    app.use('/api', router);
}
