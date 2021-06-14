module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller");

    const router = require("express").Router();

    router.post('/tutorials', tutorials.create);

    router.get('/tutorials', tutorials.findAll);

    router.get('/tutorials/:id', tutorials.findOne);

    app.use('/api', router);
}
