/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var tokenRouter = express.Router();

  tokenRouter.post('/', function(req, res) {
    if (req.body.username === 'letme' && req.body.password === 'in') {
      res.status(200).send('{ "token": "fdt4325trgf" }');
    } else {
      res.status(401).end();
    }
  });

  app.use('/api/token', require('body-parser').urlencoded(), tokenRouter);
};
