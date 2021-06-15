module.exports = app => {
    const userController = require("../controllers/user.controller");

    const Router = require("express").Router();

    Router.post('/sign-up', userController.signUp);

    Router.post('/sign-in', userController.signIn);

    app.use('/', Router);
};
