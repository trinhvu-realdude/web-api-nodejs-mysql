const db = require("../../models");
const User = db.user;
const Tutorial = db.tutorial;
const Role = db.role;

const checkEmail = (email) => User.findOne({
    where: {
        email: email
    }
});

const createUser = async (user) => await User.create({roleId: 2, name: user.name, email: user.email, password: user.password});

const getUserByEmail = (email) => User.findOne({
    where: {
        email: email
    }
});

const getRoleUser = (roleId) => Role.findByPk(roleId, {attributes: ['name']});

module.exports = {
    getUserByEmail,
    checkEmail,
    createUser,
    getRoleUser
}
