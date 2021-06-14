const authUser = (req, res, next) => {
    if (req.user == null) {
        res.render('login', {
            title: "Login",
        });
    }
    next();
};

module.exports = {
    authUser
}