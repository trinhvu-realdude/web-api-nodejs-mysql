const db = require("../../models");
const Role = db.role;
const User = db.user;

const createRole = (role) => Role.create(role);

const findAllRole = () => Role.findAll();

const findAllUserRole = () => Role.findAll({
    include: [
        {
            model: User
        }
    ]
});

module.exports = {
    createRole,
    findAllRole,
    findAllUserRole
}