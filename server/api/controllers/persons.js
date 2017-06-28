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

  post: co(function* post(req, res) {
    const params = req.swagger.params;
    const newPerson = yield personRepo.deserializer.deserialize(params.person.value);

    const person = yield personRepo.create({
      username: newPerson.username,
      firstName: newPerson.firstName,
      lastName: newPerson.lastName,
    });

    const result = personRepo.serializer.serialize(person);

    res.status(201).json(result);
  }),
};
