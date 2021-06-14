const db = require("../../models");
const Beat = db.beat;

const createBeat = (beat) => Beat.create(beat);

const findAllBeat = () => Beat.findAll();

module.exports = {
    createBeat,
    findAllBeat
}