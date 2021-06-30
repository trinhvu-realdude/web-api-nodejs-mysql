const expressSession = require('express-session')
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const multer = require("multer");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './src/uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({storage: storage});

const passport = require("passport");
require("./controllers/passport")(passport);

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
    origin: "http://localhost:8081"
};

app.set('views', (path.join(__dirname, '/views')));
app.set('view engine', 'ejs');

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(expressSession({secret: 'keyboard-cat', resave: false, saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session());


// test upload file
app.post('/upload', upload.single('file'), function(req, res) {
    console.log(req.file);
    res.send({
        message: "Upload successfully"
    })
});

app.get('/', (req, res) => {
    res.render('upload');
})

require("./routes/user.route")(app);
require("./routes/role.route")(app);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
