const express = require('express');
const router = express.Router();
const db = require('../database');

router.get('/users-list', (req, res, next) => {
    const sql = "SELECT * FROM users";

    db.query(sql, (err, data, fields) => {
        if (err) throw err;
        res.render('user-list', {title: "User List", userData: data});
        console.log("successful");
    });
});

router.get('/edit/:id', (req, res, next) => {
    const userID = req.params.id;
    const sql = `SELECT * FROM users WHERE id=${userID}`;

    db.query(sql, (err, data) => {
        if (err) throw err;
        res.render('user-edit', {title: 'User List', editData: data[0]});
        console.log("edit");
    });
});

router.post('/edit/:id', (req, res, next) => {
    const id = req.params.id;
    const updateData = req.body;
    const sql = `UPDATE users SET ? WHERE id = ?`;

    db.query(sql, [updateData, id], (err, data) => {
        if (err) throw err;
        console.log(data.affectedRows + " record(s) updated");
    });
    res.redirect('/users/users-list');
});

module.exports = router;