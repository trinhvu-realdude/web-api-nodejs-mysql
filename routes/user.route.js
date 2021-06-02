module.exports = app => {
    const users = require("../controllers/user.controller");

    const router = require("express").Router();

    router.post('/', users.create);

    router.get('/', users.findAll);

    router.get('/user-tutorial', users.findAllUserTutorial);

    router.get('/user-role', users.findAllUserRole);

    router.get('/:id', users.findOne);

    app.use('/api/users', router);
}
