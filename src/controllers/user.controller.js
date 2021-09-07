require("dotenv").config();
const userService = require("../services/user.service");
const jwt = require("jsonwebtoken");
const {hash, compare} = require("../common/hash");
const config = require("../../config");
const passport = require("passport");

// Sign Up
exports.signUp = async (req, res) => {
    try {
        const checkEmail = await userService.checkEmail(req.body.email);
        if (checkEmail) {
            res.status(409).send({message: "Email already exists!"});
        } else {
            const {name, email, password} = req.body;
            const passwordHash = await hash(password.toString().trim());
            const user = {
                name: name,
                email: email.trim(),
                password: passwordHash
            };

            console.log(user);

            const result = await userService.createUser(user);
            res.send(result);
        }
    } catch (error) {
        console.log(error);
        res.send({message: "Something wrong!"});
    }
};

// Sign In
exports.signIn = async (req, res, next) => {
    passport.authenticate('local-login', async (err, user) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            res.send("User doesn't exist");
        }

        const token = jwt.sign({
            roleId: user.roleId,
            userId: user.id,
            email: user.email
        }, config.app.secretKey);

        res.json({token: token});
    })(req, res, next);
};

exports.profile = async (req, res) => {
    const {userId, roleId} = req;
    return res.send({userId, roleId});
};

exports.homePage = async (req, res) => {
    res.render('home', {
        title: 'home'
    })
}
