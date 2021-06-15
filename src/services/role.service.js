const db = require("../../models");
const Role = db.role;

const createRole = (role) => Role.create(role);

module.exports = {
    createRole
}