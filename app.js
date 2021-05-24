const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const userRouter = require('./routes/users');

const app = express();
const port = process.env.PORT || 3000;

app.use('/users', userRouter);

app.set('views', (path.join(__dirname, '/views')));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.listen(port, () => console.log(`Listening on port ${port}`));

// module.exports = app;