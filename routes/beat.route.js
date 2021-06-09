module.exports = app => {
    const beats = require("../controllers/beat.controller");

    const router = require("express").Router();

    router.post('/beats', beats.create);

    router.get('/beats', beats.findAll);

    app.use('/api', router);
}