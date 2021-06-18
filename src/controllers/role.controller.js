const roleService = require("../services/role.service");

exports.createRole = async (req, res) => {
    const role = {
        name: req.body.name
    };

    const result = await roleService.createRole(role);
    res.send(result);
}