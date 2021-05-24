const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "personal"
});

db.connect((err) => {
    if (err) throw err;
    console.log("DB Connected!");
});

module.exports = db;

// DATA
// CREATE TABLE person (
//     id int,
//     firstName varchar(255),
//     lastName varchar(255),
//     email varchar(255),
//     city varchar(255)
//     );
// INSERT DATA 
// INSERT INTO person (id, firstName, lastName, email, city) VALUES (1, "Trinh", "Vu Dang", "realdude.sf@gmail.com", "Vienna");
// INSERT INTO person (id, firstName, lastName, email, city) VALUES (2, "Khanh", "Tran Hoang Duy", "joseus@gmail.com", "Budapest");
// INSERT INTO person (id, firstName, lastName, email, city) VALUES (3, "Thanh", "Lam Vien", "hello123@gmail.com", "Havana");
// INSERT INTO person (id, firstName, lastName, email, city) VALUES (3, "Thang", "Nguyen Duc", "bigdragon@gmail.com", "Moscow");