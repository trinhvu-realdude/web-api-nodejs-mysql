const LocalStrategy = require("passport-local").Strategy;
const userService = require("../services/user.service");
const {compare} = require("../common/hash");

module.exports = (passport) => {
    passport.use('local-login', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, (req, email, password, done) => {
        process.nextTick(async () => {
            try {
                const user = await userService.getUserByEmail(email);

                if (! user) {
                    return done(null, false)
                }

                const hashedPassword = await compare(password, user.password);

                if (hashedPassword) {
                    return done(null, user);
                }
                return done(null, false);
            } catch (error) {
                return done(null, false);
            }
        })
    }))
}
