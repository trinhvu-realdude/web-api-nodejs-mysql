const expressSession = require('express-session')
const express = require('express');
const bodyParser = require('body-parser');
const passport = require("passport");
const cors = require('cors');
const path = require('path')

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
    origin: "http://localhost:8081"
};

app.set('views', (path.join(__dirname, '/views')));
app.set('view engine', 'ejs');

app.use(expressSession({secret: 'keyboard-cat'}));
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(passport.initialize());
app.use(passport.session());

require("./routes/user.route")(app);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
