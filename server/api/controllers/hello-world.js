'use strict';

const util = require('util');

/*
 export the functions referenced in your Swagger document by name.

 Either:
  - The HTTP Verb of the corresponding operation (get, put, post, delete, etc)
  - Or the operationId associated with the operation in your Swagger document
 */
const controller = {
  hello: function hello(req, res) {
    const name = req.swagger.params.name.value || 'stranger';
    const message = util.format('Hello, %s!', name);

    res
      .type('application/vnd.api+json')
      .send({ message: message });
  },
};

module.exports = controller;
