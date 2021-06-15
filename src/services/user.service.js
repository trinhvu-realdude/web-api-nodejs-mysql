const db = require("../../models");
const User = db.user;
const Tutorial = db.tutorial;
const Role = db.role;

const checkEmail = (email) => User.findOne({
    where: {
        email: email
    }
});

const createUser = async (user) => await User.create({
    name: user.name,
    email: user.email,
    password: user.password
});

module.exports = {
   checkEmail,
   createUser 
}
