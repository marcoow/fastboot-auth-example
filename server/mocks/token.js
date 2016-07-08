/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var tokenRouter = express.Router();

  tokenRouter.post('/', function(req, res) {
    if (req.body.username === 'letme' && req.body.password === 'in') {
      res.status(204).cookie('token', 'fdt4325trgf', { httpOnly: true/*, secure: true*/ }).end();
    } else {
      res.status(401).end();
    }
  });

  app.use('/api/token', require('body-parser').urlencoded(), tokenRouter);
};
