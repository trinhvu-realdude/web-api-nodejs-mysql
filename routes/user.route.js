module.exports = app => {
    const users = require("../controllers/user.controller");

    const router = require("express").Router();

    router.post('/users', users.create);

    router.get('/users', users.findAll);

    router.get('/users/tutorials', users.findAllUserTutorial);

    router.get('/users/roles/', users.findAllUserRole);

    router.get('/users/roles/:id', users.findAllUserRoleId);

    router.get('/users/:id', users.findOne);

    router.get('/users/delete/:id', users.deleteUserId);

    router.get('/users/edit/:id', users.editUserId);

    router.post('/users/edit/:id', users.updateUserId);

    app.use('/api', router);
}
