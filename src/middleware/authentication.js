const jwt = require("jsonwebtoken");
const config = require("../../config");
const userService = require("../services/user.service");

exports.authenticateAdmin = (roleArray) => async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, config.app.secretKey);
        console.log(decoded);
        if (decoded) {
            req.roleId = decoded.roleId;
            req.userId = decoded.userId;
            req.email = decoded.email;

            const role = await userService.getRoleUser(decoded.roleId);

            const authorized = roleArray.indexOf(role.name);

            if (authorized === 0) {
                return next();
            }
        }
    } catch (error) {
        return res.send("Invalid Token");
    }
};

exports.authenticateCustomer = (roleArray) => async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, config.app.secretKey);
        console.log(decoded);
        if (decoded) {
            req.roleId = decoded.roleId;
            req.userId = decoded.userId;
            req.email = decoded.email;

            const role = await userService.getRoleUser(decoded.roleId);

            const authorized = roleArray.indexOf(role.name);

            if (authorized === 1) {
                return next();
            }
        }
    } catch (error) {
        return res.send("Invalid Token");
    }
};