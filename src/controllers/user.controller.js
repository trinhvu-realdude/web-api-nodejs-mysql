const userService = require("../services/user.service");
const jwt = require("jsonwebtoken");
const {hash} = require("../common/hash");

exports.signUp = async (req, res) => {
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
};
