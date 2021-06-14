const {
    createUserRole,
    findAllUserRole
} = require("../services/user_role.service");

exports.create = async (req, res) => {
    const {user_id, role_id} = req.body;
    const user_role = {
        user_id: user_id,
        role_id: role_id
    };

    console.log(user_role);

    const result = await createUserRole(user_role);
    res.send(result);
};

exports.findAll = async (req, res) => {
    const result = await findAllUserRole();
    res.send(result);
};
