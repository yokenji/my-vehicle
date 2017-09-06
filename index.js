var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var userRouter = require('./router/user');
var loginRouter = require('./router/login');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use('/users', userRouter);
app.use('/login', loginRouter);

app.listen(3000, () => {
    console.log('Server is listening.');
});