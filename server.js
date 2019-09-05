const express = require('express');
const userRouter = require('./users/userRouter.js')
const server = express();



server.use(logger)
server.use('/users', userRouter);


server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

//custom middleware

function logger(req, res, next) {
  console.log(`${new Date()} | Method -> ${req.method} | URL -> ${req.url}`)
  next();
};

module.exports = server;
