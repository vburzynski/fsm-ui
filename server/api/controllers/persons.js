const PersonRepository = require('../repositories/personRepository');
const bluebird = require('bluebird');

const personRepo = new PersonRepository();
const co = bluebird.coroutine;

module.exports = {
  get: co(function* get(req, res) {
    const persons = yield personRepo.findAll();
    res.json(personRepo.serializer.serialize(persons));
  }),

  post: co(function* post(req, res) {
    const params = req.swagger.params;
    const person = yield personRepo.deserializer.deserialize(params.person.value);

    const record = yield personRepo.create({
      username: person.username,
      firstName: person.firstName,
      lastName: person.lastName,
    });

    res.status(201).json(personRepo.serializer.serialize(record));
  }),
};
