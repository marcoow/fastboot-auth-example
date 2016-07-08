/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var privateDataRouter = express.Router();

  privateDataRouter.get('/', function(req, res) {
    var token = req.cookies.token;
    if (token) {
      res.send({
        'private-data': [
          'this is private',
          '…oh so private',
          'not for public!'
        ]
      });
    } else {
      res.status(401).end();
    }
  });

  app.use('/api/private-data', require('cookie-parser')(), privateDataRouter);
};
