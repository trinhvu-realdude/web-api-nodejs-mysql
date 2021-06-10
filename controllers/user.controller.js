const {
    getAllUser,
    createUser,
    findUserId,
    findAllUserTutorial,
    findAllUserRole,
    findAllUserRoleId,
    deleteUserId,
    updateUserId
} = require("../services/user.service");

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
    const users = await findAllUserTutorial();
    res.send(users);
};

exports.findAllUserRole = async (req, res) => {
    const user_role = await findAllUserRole();
    res.send(user_role);
};

exports.findAllUserRoleId = async (req, res) => {
    const id = req.params.id;
    const user_role_id = await findAllUserRoleId(id);
    res.render('user-profile', {
        title: 'User Profile',
        userData: user_role_id
    })
}

exports.deleteUserId = async (req, res) => {
    const id = req.params.id;

    const num = await deleteUserId(id);

    if (num == 1) {
        res.redirect(302, '/api/users');
    } else {
        res.send("Error!");
    }
};

exports.editUserId = async (req, res) => {
    const id = req.params.id;

    const user_id = await findUserId(id);

    // console.log(user_id);

    res.render('user-edit', {
        title: "User Edit",
        editData: user_id
    });
};

exports.updateUserId = async (req, res) => {
    const id = req.params.id;

    console.log(id);

    const num = await updateUserId(req.body, id);

    if (num == 1) {
        res.redirect(302, '/api/users');
    }
    else {
        res.send(`Cannot update Tutorial with id=${id}`);
    }
}
