module.exports = app => {
    const users = require("../controllers/user.controller");

    const router = require("express").Router();

    router.post('/users', users.create);

    router.get('/users', users.findAll);

    router.get('/userstutorials', users.findAllUserTutorial);

    router.get('/users/roles', users.findAllUserRole);

    router.get('/users/:id', users.findOne);

    router.delete('/users/:id', users.deleteUserId);

    app.use('/api', router);
}
