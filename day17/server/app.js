const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();
module.exports = app;

const usersRouter = require('./routes/users');
app.use('/', usersRouter);

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

const server = http.createServer(app);
const port = 4000;
server.listen(port);
