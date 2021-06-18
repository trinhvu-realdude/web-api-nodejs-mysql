const jwt = require("jsonwebtoken");
const config = require("../../config");
const userService = require("../services/user.service");

exports.authenticateRole = (roleArray) => async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        console.log(`Token: ${token}`);
        const decoded = jwt.verify(token, config.app.secretKey);
        console.log(decoded);
        if (decoded) {
            req.roleId = decoded.roleId;
            req.userId = decoded.userId;
            req.email = decoded.email;

            const role = await userService.getRoleUser(decoded.roleId);
            console.log(role.name);
            const authorized = roleArray.indexOf(role.name);

            if (authorized === 0 || authorized === 1) {
                return next();
            }
        }
    } catch (error) {
        return res.send("Invalid Token");
    }
}