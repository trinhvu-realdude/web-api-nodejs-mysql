const db = require("../models");
const Role = db.role;
const User = db.user;

exports.create = async (req, res) => {

    const role = {
        name: req.body.name
    };
    console.log(role);

    const result = await Role.create(role);
    res.send(result);
};

exports.findAll = async (req, res) => {
    const result = await Role.findAll();
    res.send(result);
};

exports.findAllUserRole = async (req, res) => {
    const user_role = await Role.findAll({
        include: [
            {
                model: User,
            }
        ]
    });

    res.send(user_role);
}