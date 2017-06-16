'use strict';

var util = require('util');

/*
 export the functions referenced in your Swagger document by name.

 Either:
  - The HTTP Verb of the corresponding operation (get, put, post, delete, etc)
  - Or the operationId associated with the operation in your Swagger document
 */
var controller = {
  hello: function (req, res) {
    var name = req.swagger.params.name.value || 'stranger';
    var hello = util.format('Hello, %s!', name);

    res.json(hello);
  }
}

module.exports = controller;
