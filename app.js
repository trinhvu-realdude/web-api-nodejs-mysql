const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const db = require("./models");

const corsOptions = {
    origin: "http://localhost:8081"
};

// app.set('views', (path.join(__dirname, '/views')));
// app.set('view engine', 'ejs');

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({
        message: "Hello Hello"
    });
})

require("./routes/user.route")(app);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});