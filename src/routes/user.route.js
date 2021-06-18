module.exports = app => {
    const userController = require("../controllers/user.controller");

    const middleware = require("../middleware/authentication");

    const Router = require("express").Router();

    Router.post('/sign-up', userController.signUp);

    Router.post('/sign-in', userController.signIn);

    Router.get('/profile', middleware.authenticateRole(["Admin", "Customer"]), userController.profile);

    app.use('/', Router);
};
