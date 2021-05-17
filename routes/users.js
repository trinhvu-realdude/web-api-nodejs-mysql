const express = require('express');
const router = express.Router();
const db = require('../database');

router.get('/users-list', (req, res, next) => {
    const sql = "SELECT * FROM person";

    db.query(sql, (err, data, fields) => {
        if (err) throw err;
        res.render('user-list', {title: "User List", userData: data});
        console.log("successful");
    })
})

module.exports = router;