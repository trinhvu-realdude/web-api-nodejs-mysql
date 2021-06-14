const db = require("../../models");
const Tutorial = db.tutorial;

const createTutorial = (tutorial) => Tutorial.create(tutorial);

const findAllTutorial = () => Tutorial.findAll();

const findTutorialId = (id) => Tutorial.findByPk(id);

module.exports = {
    createTutorial,
    findAllTutorial,
    findTutorialId
}