module.exports = app => {
    const userController = require("../controllers/user.controller");

    const middleware = require("../middleware/authentication");

    const router = require("express").Router();

    router.get('/home', userController.homePage);

    router.post('/sign-up', userController.signUp);

    router.post('/sign-in', userController.signIn);

    router.get('/profile', middleware.authenticateCustomer(["Admin", "Customer"]), userController.profile);

    app.use('/', router);
};
