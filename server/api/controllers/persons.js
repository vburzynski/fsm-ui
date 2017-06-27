const PersonRepository = require('../repositories/personRepository');
const bluebird = require('bluebird');

const personRepo = new PersonRepository();
const co = bluebird.coroutine;

module.exports = {
  get: co(function* get(req, res) {
    const person = personRepo.new({
      firstName: 'John',
      lastName: 'Smith',
      username: 'user1',
    });

    yield person.save();

    const result = personRepo.serializer.serialize([person]);

    res.json(result);
  }),

  post: function post(req, res) {
    const params = req.swagger.params;
    const firstName = params.firstName.value;
    const lastName = params.lastName.value;
    const userName = params.username.value;

    const person = personRepo.create({ firstName, lastName, userName });

    res.json(personRepo.serializer.serialize(person));
  },
};
