const userService = require("../services/user.service");
const jwt = require("jsonwebtoken");
const {hash, compare} = require("../common/hash");

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
                email: email,
                password: passwordHash
            };

            console.log(user);

            const result = await userService.createUser(user);
            res.send(result);
        }
    } catch (error) {
        res.send({message: "Something wrong!"});
    }
};

exports.signIn = async (req, res) => {
    try {
        const checkEmail = await userService.checkEmail(req.body.email);

        if (checkEmail === null) {
            res.send({message: "Invalid credentials"});
        } else {
            const user = await userService.getUserByEmail(req.body.email);
            const comparePassword = await compare(req.body.password, user.dataValues.password);
            if (comparePassword) {
                const token = jwt.sign({
                    email: checkEmail.email,
                    userId: checkEmail.id
                }, "secret");

                res.send({message: "Signin successfully", token: token});
            } else {
                res.send({message: "Something wrong"});
            }
        }
    } catch (error) {
        res.send(error);
    }
}
