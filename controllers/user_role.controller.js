const db = require("../models");
const UserRole = db.user_roles;

exports.create = async (req, res) => {

    const user_role = {
        user_id: req.body.user_id,
        role_id: req.body.role_id
    };

    console.log(user_role);

    const result = await UserRole.create(user_role);
    res.send(result);
};

exports.findAll = async (req, res) => {
    const result = await UserRole.findAll();
    res.send(result);
};
