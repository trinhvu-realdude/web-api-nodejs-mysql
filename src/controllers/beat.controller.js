const {
    createBeat,
    findAllBeat
} = require("../services/beat.service");

exports.create = async (req, res) => {
    const {title, time, bpm, price} = req.body;
    const beat = {
        title: title,
        time: time,
        bpm: bpm,
        price: price
    };
    console.log(beat);
    const result = await createBeat(beat);
    res.send(result);
};

exports.findAll = async (req, res) => {
    const result = await findAllBeat();
    res.send(result);
};