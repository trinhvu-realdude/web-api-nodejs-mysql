const db = require("../models");
const {
    getAllUser, 
    createUser, 
    findUserId, 
    findAllUserTutorial,
    findAllUserRole
} = require("../services/user.service");

const User = db.user;
const Tutorial = db.tutorial;
const Role = db.role;

exports.create = async (req, res) => {
    const {firstName, lastName, email, city} = req.body;
    const user = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        city: city
    };
    console.log(user);

    const result = await createUser(user);
    res.send(result);
};

exports.findAll = async (req, res) => {
    const result = await getAllUser();

    res.render('user-list', {
        title: "User List",
        userData: result
    });
};

exports.findOne = async (req, res) => {
    const id = req.params.id;

    const result = await findUserId(id);
    res.send(result);
};

exports.findAllUserTutorial = async (req, res) => {
    const users = await findAllUserTutorial({
        include: [
            {
                model: Tutorial
            }
        ]
    });

    res.send(users);
};

exports.findAllUserRole = async (req, res) => {
    const user_role = await findAllUserRole({
        include: [
            {
                model: Role
            }
        ]
    });

    res.send(user_role);
}
