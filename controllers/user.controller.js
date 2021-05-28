const db = require("../models");
const User = db.user;

exports.create = async (req, res) => {

    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        city: req.body.city
    };
    console.log(user);

    const result = await User.create(user);
    res.send(result);
};

exports.findAll = async (req, res) => {
    const result = await User.findAll();
    
    res.render('user-list', {
        title: "User List",
        userData: result
    });
};

exports.findOne = async (req, res) => {
    const id = req.params.id;

    const result = await User.findByPk(id);
    res.send(result);
};
