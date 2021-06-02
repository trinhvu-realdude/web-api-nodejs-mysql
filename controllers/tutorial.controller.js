const db = require("../models");
const Tutorial = db.tutorial;

exports.create = async (req, res) => {

    const tutorial = {
        title: req.body.title,
        description: req.body.description,
        user_id: req.body.user_id
    };
    console.log(tutorial);

    const result = await Tutorial.create(tutorial);
    res.send(result);
};

exports.findAll = async (req, res) => {
    const result = await Tutorial.findAll();
    res.send(result);
};

exports.findOne = (req, res) => {};
