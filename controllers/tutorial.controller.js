const {createTutorial, findAllTutorial, findTutorialId} = require("../services/tutorial.service");

exports.create = async (req, res) => {
    const {title, description, user_id} = req.body
    const tutorial = {
        title: title,
        description: description,
        user_id: user_id
    };
    console.log(tutorial);

    const result = await createTutorial(tutorial);
    res.send(result);
};

exports.findAll = async (req, res) => {
    const result = await findAllTutorial();
    res.send(result);
};

exports.findOne = async (req, res) => {
    const id = req.params.id;
    const result = await findTutorialId(id);
    res.send(result);
};
