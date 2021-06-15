module.exports = app => {
    const userController = require("../controllers/user.controller");
    const Router = require("express").Router();

    Router.post('/sign-up', userController.signUp);
    
    app.use('/', Router)
}
