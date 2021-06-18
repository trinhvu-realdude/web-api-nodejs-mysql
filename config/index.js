require("dotenv").config();

const env = {
    env: process.env.NODE_ENV,
    app: {
        secretKey: process.env.JWT_TOKEN_SECRET
    }
};

module.exports = env;