module.exports = app => {
    const users = require("../controllers/user.controller");

    const router = require("express").Router();

    router.post('/', users.create);

    router.get('/', users.findAll);

    router.get('/tutorials', users.findAllUserTutorial);

    router.get('/roles', users.findAllUserRole);

    router.get('/:id', users.findOne);

    app.use('/api/users', router);
}
