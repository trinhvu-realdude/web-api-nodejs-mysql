const {
    createRole,
    findAllRole,
    findAllUserRole
} = require("../services/role.service");

exports.create = async (req, res) => {

    const role = {
        name: req.body.name
    };
    console.log(role);

    const result = await createRole(role);
    res.send(result);
};

exports.findAll = async (req, res) => {
    const result = await findAllRole();
    res.send(result);
};

exports.findAllUserRole = async (req, res) => {
    const user_role = await findAllUserRole();
    res.send(user_role);
}
