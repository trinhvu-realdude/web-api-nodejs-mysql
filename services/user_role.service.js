const db = require("../models");
const UserRole = db.user_roles;

const createUserRole = (user_role) => UserRole.create(user_role);

const findAllUserRole = () => UserRole.findAll();

module.exports = {
    createUserRole,
    findAllUserRole
}