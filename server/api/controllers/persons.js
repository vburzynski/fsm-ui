var PersonRepository = require('../repositories/personRepository');
var personRepo = new PersonRepository();

module.exports = {
  get: function(req, res) {
    username = req.swagger.params.username.value;

    res.json({});
  },
  post: function(req, res) {
    params = req.swagger.params;
    firstName = params.firstName.value;
    lastName = params.lastName.value;
    userName = params.username.value;

    var person = personRepo.create({ firstName, lastName, userName });

    res.json('not implemented');
  }
}
