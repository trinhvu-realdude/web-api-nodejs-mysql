const db = require("../models");
const User = db.tutorials;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.firstName) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        city: req.body.city
    };

    User.create(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};

exports.findAll = (req, res) => {
    
};

exports.findOne = (req, res) => {

};
