const db = require("../models");
const User = db.user;
const Tutorial = db.tutorial;
const Role = db.role;

const createUser = (user) => User.create(user);

const getAllUser = () => User.findAll();

const findUserId = (id) => User.findByPk(id);

const findAllUserTutorial = () => User.findAll({
    include: [
        {
            model: Tutorial
        }
    ]
});

const findAllUserRole = () => User.findAll({
    include: [
        {
            model: Role,
        }
    ]
});

module.exports = {
    createUser,
    getAllUser,
    findUserId,
    findAllUserTutorial,
    findAllUserRole
}